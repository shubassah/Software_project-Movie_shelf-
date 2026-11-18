$ErrorActionPreference = 'Stop'

if (-not (Test-Path '.venv\Scripts\python.exe')) {
  Write-Error 'Python virtual environment not found. Run: py -m venv .venv'
}

& .\.venv\Scripts\python.exe run_cache_service.py
