import asyncio
import os
import sys
import uvicorn

if sys.platform == "win32":
    asyncio.set_event_loop_policy(
        asyncio.WindowsSelectorEventLoopPolicy()
    )

if __name__ == "__main__":
    port = int(os.environ.get("PORT", "8100"))
    uvicorn.run(
        "cache_service.main:app",
        host="0.0.0.0",
        port=port,
    )

