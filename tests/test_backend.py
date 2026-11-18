# Backend self-test (SQLite stands in for Supabase; TMDB/YouTube are mocked).
# Run from the project root:  .\.venv\Scripts\python.exe -m pip install aiosqlite  then  .\.venv\Scripts\python.exe tests\test_backend.py
import asyncio, importlib, os, sys, sqlite3
from datetime import date, timedelta
import tempfile; DB = os.path.join(tempfile.gettempdir(), "movie_shelf_test.db"); os.path.exists(DB) and os.remove(DB)
os.environ.update(DATABASE_URL="sqlite+aiosqlite:///" + DB.replace(chr(92), "/"), TMDB_API_KEY="x", YOUTUBE_API_KEY="y")
sys.path.insert(0, os.getcwd())
main = importlib.import_module("cache-service.main")
cache = importlib.import_module("cache-service.cache")
analysis = importlib.import_module("cache-service.analysis")
clients = importlib.import_module("cache-service.clients")
import httpx

calls = {"tmdb": 0, "comments": 0}
today = date.today()
MOVIES = {
  1: dict(id=1, title="Old Classic", release_date="2010-07-16", popularity=5, poster_path="/a.jpg", genres=[{"name":"Drama"}], runtime=100,
          credits={"cast":[{"name":"A","character":"B"}],"crew":[{"job":"Director","name":"D"}]},
          videos={"results":[{"site":"YouTube","key":"abc","type":"Trailer","official":True,"name":"Trailer"}]}),
  2: dict(id=2, title="Brand New", release_date=today.isoformat(), popularity=500, poster_path=None, genres=[], runtime=90, credits={}, videos={"results":[]}),
  3: dict(id=3, title="This Week", release_date=(today - timedelta(days=5)).isoformat(), popularity=50, poster_path=None, genres=[], runtime=90, credits={}, videos={"results":[]}),
}
async def fake_tmdb(path, params=None):
    calls["tmdb"] += 1
    if path.startswith("/movie/") and path.split("/")[2].isdigit(): return dict(MOVIES[int(path.split("/")[2])])
    if path == "/search/movie": return {"page":1,"total_pages":1,"results":[{"id":1,"title":"Old Classic","poster_path":"/a.jpg"}]}
    return {"page":1,"results":[{"id":1,"title":"X","poster_path":"/p.jpg"}]}
COMMENTS = [{"id":f"c{i}","tmdb_id":0,"video_id":"v","author_name":"u","text":t,"like_count":1,"published_at":"2025-01-01T00:00:00Z","data":{}} for i,t in enumerate([
  "The acting was brilliant and the story was amazing. Loved it!", "Terrible pacing and a boring, predictable plot overall.",
  "Great soundtrack and stunning visuals throughout the film.", "I watched this yesterday with my friends at the cinema."])]
async def fake_collect(title, release, tmdb_id, max_videos=3):
    calls["comments"] += 1
    await asyncio.sleep(0.05)
    return [dict(c, tmdb_id=tmdb_id, id=f"{tmdb_id}-{c['id']}") for c in COMMENTS], {}
async def no_search(*a, **k): return None
main.tmdb, main.collect_review_comments, main.youtube_trailer_search = fake_tmdb, fake_collect, no_search

def db(sql, *a):
    c = sqlite3.connect(DB); r = c.execute(sql, a).fetchall(); c.close(); return r
ok = lambda cond, msg: (print(("PASS " if cond else "FAIL ") + msg), cond)[1]
results = []

async def run():
    async with main.app.router.lifespan_context(main.app):
        async with httpx.AsyncClient(transport=httpx.ASGITransport(app=main.app), base_url="http://t") as c:
            r = await c.get("/api/movies/popular"); results.append(ok(r.status_code == 200 and r.json()["results"][0]["poster_url"].endswith("/p.jpg"), "list route /api/movies/popular (not parsed as id)"))
            n = calls["tmdb"]; await c.get("/api/movies/popular"); results.append(ok(calls["tmdb"] == n, "2nd list call served from DB cache"))
            row = db("select endpoint, hit_count, (julianday(expires_at)-julianday(created_at))*24 from api_cache where cache_key='list:popular:1'")[0]
            results.append(ok(row[0]=="movie-list" and row[1]==1 and abs(row[2]-6)<0.1, f"list: endpoint={row[0]}, hit_count={row[1]}, ttl≈{row[2]:.2f}h (6h)"))
            await c.get("/api/search?q=Old"); row = db("select (julianday(expires_at)-julianday(updated_at))*24 from api_cache where cache_key like 'search:%'")[0]
            results.append(ok(abs(row[0]-12)<0.1, f"search ttl≈{row[0]:.2f}h (12h)"))
            r = await c.get("/api/movies/1"); d = r.json()
            results.append(ok("analysis" not in d and d["trailer"]["video_id"]=="abc" and d["director"]=="D", "details: normalized, trailer from TMDB videos, no YouTube comment calls"))
            results.append(ok(calls["comments"]==0, "details load does not touch YouTube comments"))
            row = db("select (julianday(expires_at)-julianday(updated_at))*24/24 from api_cache where cache_key='movie:1:details'")[0]
            results.append(ok(row[0] > 59, f"old/unpopular details ttl≈{row[0]:.0f} days (dynamic, capped 90)"))
            # analysis cache: old movie cached 3d+, called once
            await c.get("/api/movies/1/analysis"); await c.get("/api/movies/1/analysis")
            results.append(ok(calls["comments"]==1, "old movie analysis cached (1 YouTube collection for 2 requests)"))
            # new movie bypass
            calls["comments"]=0; await c.get("/api/movies/2/analysis"); await c.get("/api/movies/2/analysis")
            results.append(ok(calls["comments"]==2, "released today: analysis cache bypassed (2 collections)"))
            results.append(ok(not db("select 1 from api_cache where cache_key='movie:2:analysis'"), "bypassed analysis not stored"))
            # 3-7 day = 1h
            await c.get("/api/movies/3/analysis"); row = db("select (julianday(expires_at)-julianday(updated_at))*24 from api_cache where cache_key='movie:3:analysis'")[0]
            results.append(ok(abs(row[0]-1)<0.05, f"released 5 days ago: analysis ttl≈{row[0]:.2f}h (1h)"))
            # concurrency /full + /reviews on bypass movie
            calls["comments"]=0
            a, b = await asyncio.gather(c.get("/api/movies/2/full"), c.get("/api/movies/2/reviews"))
            results.append(ok(calls["comments"]==1, "concurrent /full + /reviews share one YouTube collection"))
            full = a.json(); results.append(ok(full["analysis"]["source"]=="youtube" and "movie" in full, "/full shape: {movie, analysis} (frontend reads full.analysis)"))
            an = full["analysis"]
            results.append(ok({"overall_verdict","overall_positive_pct","reviews_analyzed","sentences_scored","positive_reviews","negative_reviews","aspects","pros","cons"} <= set(an), "analysis has frontend + report fields"))
            print("   analysis:", an["overall_verdict"], an["overall_positive_pct"], an["sentences_scored"], [p["aspect"] for p in an["pros"]], [p["aspect"] for p in an["cons"]])
            r = await c.get("/api/movies/1/trailer"); results.append(ok(r.json()["trailer"]["youtube_embed_url"].endswith("/abc"), "/trailer"))
            r = await c.get("/health"); print("   health:", r.status_code, r.json())
            results.append(ok(db("select count(*) from youtube_comments")[0][0] > 0 and db("select count(*) from movie_records")[0][0] > 0, "comments + movie records persisted"))

asyncio.run(run())

# unit: TTL policy
cl = cache.clamp_ttl
results.append(ok(cl(1)==1800 and cl(10**9)==90*86400, "clamp 30min..90d"))
results.append(ok(cache.analysis_ttl((today-timedelta(days=1)).isoformat())==0 and cache.analysis_ttl((today-timedelta(days=2)).isoformat())==0, "analysis bypass ≤2 days"))
results.append(ok(cache.analysis_ttl((today-timedelta(days=3)).isoformat())==3600 and cache.analysis_ttl((today-timedelta(days=7)).isoformat())==3600, "analysis 1h for 3–7 days"))
results.append(ok(cache.analysis_ttl("2015-01-01", 5) > cache.analysis_ttl((today-timedelta(days=60)).isoformat(), 200), "old/unpopular analysis TTL > new/popular"))
results.append(ok(cache.analysis_ttl("2015-01-01", 5) >= 3*86400, "default analysis ≥ 3 days for older movies"))
results.append(ok(cache.dynamic_ttl(cache.DETAILS_TTL, (today-timedelta(days=10)).isoformat(), 300) < cache.dynamic_ttl(cache.DETAILS_TTL, "2005-01-01", 2), "details: new+popular shorter than old+unpopular"))
# unit: sentiment thresholds
V = analysis.verdict_for
results.append(ok((V(65),V(35),V(50),V(None),V(65.1),V(34.9))==("Mostly Positive","Mostly Negative","Mixed","Not enough data","Mostly Positive","Mostly Negative"), "verdict thresholds 65/35/none"))
# unit: TMDB two-host fallback
seen=[]
def handler(req):
    seen.append(req.url.host)
    return httpx.Response(500) if req.url.host=="api.themoviedb.org" else httpx.Response(200, json={"ok":1})
real = httpx.AsyncClient
class Patched(real):
    def __init__(self,*a,**k): super().__init__(*a, transport=httpx.MockTransport(handler), **{x:y for x,y in k.items() if x!="transport"})
httpx.AsyncClient = Patched
out = asyncio.run(clients.tmdb("/x")); httpx.AsyncClient = real
results.append(ok(out=={"ok":1} and seen==["api.themoviedb.org","api.tmdb.org"], f"TMDB falls back to second host {seen}"))
print(f"\n{sum(results)}/{len(results)} passed")
