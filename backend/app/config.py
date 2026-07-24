from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8", extra="ignore")

    openai_api_key: str | None = None
    # Persona simulation + follow-up chat
    openai_model: str = "gpt-4.1"
    # Synthesis, compare narrative, screenshot vision
    openai_synthesis_model: str = "gpt-4.1"
    openai_embedding_model: str = "text-embedding-3-large"
    tts_model: str = "gpt-4o-mini-tts"

    @property
    def openai_vision_model(self) -> str:
        """Vision uses the stronger model by default (same as synthesis)."""
        return self.openai_synthesis_model
    cors_origins: str = "http://localhost:3000,http://127.0.0.1:3000"
    api_prefix: str = "/api/v1"

    supabase_url: str | None = None
    supabase_service_role_key: str | None = None
    supabase_jwt_secret: str | None = None
    supabase_storage_bucket: str = "product-docs"
    rate_limit_enabled: bool = True
    security_headers_enabled: bool = True

    @property
    def cors_origin_list(self) -> list[str]:
        return [origin.strip() for origin in self.cors_origins.split(",") if origin.strip()]

    @property
    def supabase_configured(self) -> bool:
        return bool(self.supabase_url and self.supabase_service_role_key and self.supabase_jwt_secret)


settings = Settings()
