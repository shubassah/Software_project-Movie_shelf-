"""Environment-driven settings for the FastAPI cache service."""
from __future__ import annotations

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    tmdb_api_key: str = ""
    youtube_api_key: str = ""
    database_url: str = ""
    cache_service_port: int = 8100
    cache_min_ttl_seconds: int = 30 * 60          # 30 minutes
    cache_max_ttl_seconds: int = 90 * 24 * 3600   # 90 days
    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

    def missing_keys(self) -> list[str]:
        missing = []
        if not self.tmdb_api_key:
            missing.append("TMDB_API_KEY")
        if not self.youtube_api_key:
            missing.append("YOUTUBE_API_KEY")
        return missing


settings = Settings()
