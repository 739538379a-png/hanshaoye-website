@echo off
setlocal
cd /d "%~dp0"

start "汉少爷官网预览服务" /min cmd.exe /k "npm start -- --hostname 0.0.0.0 --port 3000"
timeout /t 3 /nobreak >nul
start "" "http://localhost:3000/"

endlocal
