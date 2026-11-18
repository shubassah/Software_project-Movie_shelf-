[CmdletBinding()]
param(
    [switch]$Install
)

$ErrorActionPreference = "Stop"
$ProjectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $ProjectRoot

function Fail($Message) {
    Write-Host "ERROR: $Message" -ForegroundColor Red
    exit 1
}

Write-Host "Movie Shelf local launcher" -ForegroundColor Cyan
Write-Host "Project: $ProjectRoot"

if (-not (Test-Path ".env")) {
    if (Test-Path ".env.example") {
        Copy-Item ".env.example" ".env"
        Write-Host "Created .env from .env.example. Add your API/database values before using the app." -ForegroundColor Yellow
    } else {
        Fail "Neither .env nor .env.example was found. Extract the current project archive first."
    }
}

if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
    Fail "Node.js was not found on PATH. Install Node.js and reopen PowerShell."
}

if (-not (Get-Command npm -ErrorAction SilentlyContinue)) {
    Fail "npm was not found on PATH. Install Node.js and reopen PowerShell."
}

$Python = Get-Command py -ErrorAction SilentlyContinue
if (-not $Python) {
    $Python = Get-Command python -ErrorAction SilentlyContinue
}
if (-not $Python) {
    Fail "Python was not found on PATH. Install Python and reopen PowerShell."
}

if (-not (Test-Path ".venv\Scripts\python.exe")) {
    Write-Host "Creating Python virtual environment..." -ForegroundColor Yellow
    if ($Python.Name -eq "py.exe") {
        & py -m venv .venv
    } else {
        & python -m venv .venv
    }
    if ($LASTEXITCODE -ne 0) { Fail "Could not create the Python virtual environment." }
}

if (-not (Test-Path "node_modules")) {
    Write-Host "Installing Node dependencies..." -ForegroundColor Yellow
    & npm install
    if ($LASTEXITCODE -ne 0) { Fail "npm install failed." }
}

if ($Install -or -not (Test-Path ".venv\.movie-shelf-deps-installed")) {
    Write-Host "Installing Python dependencies..." -ForegroundColor Yellow
    & ".venv\Scripts\python.exe" -m pip install -r "cache-service\requirements.txt"
    if ($LASTEXITCODE -ne 0) { Fail "Python dependency installation failed." }
    New-Item ".venv\.movie-shelf-deps-installed" -ItemType File -Force | Out-Null
}

$CacheCommand = "Set-Location -LiteralPath '$ProjectRoot'; & '.venv\Scripts\python.exe' 'run_cache_service.py'"
$NodeCommand = "Set-Location -LiteralPath '$ProjectRoot'; & npm start"

Write-Host "Starting Python cache service on http://localhost:8100 ..." -ForegroundColor Green
Start-Process powershell.exe `
    -ArgumentList @("-NoExit", "-ExecutionPolicy", "Bypass", "-Command", $CacheCommand) `
    -WorkingDirectory $ProjectRoot

Start-Sleep -Seconds 2

Write-Host "Starting Node/Express server on http://localhost:8000 ..." -ForegroundColor Green
Start-Process powershell.exe `
    -ArgumentList @("-NoExit", "-ExecutionPolicy", "Bypass", "-Command", $NodeCommand) `
    -WorkingDirectory $ProjectRoot

Write-Host "" 
Write-Host "Both services were started in separate PowerShell windows." -ForegroundColor Cyan
Write-Host "Open: http://localhost:8000"
Write-Host "Health check: http://localhost:8000/api/health"
Write-Host "Close the two service windows to stop the app."
