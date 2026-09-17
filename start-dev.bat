@echo off
setlocal
cd /d "%~dp0"
set "NEXT_TELEMETRY_DISABLED=1"

if not exist "node_modules\" (
  call npm install
  if errorlevel 1 goto :failed
)

call npm run dev
goto :end

:failed
echo.
echo Dependencies could not be installed. Check your network and try again.
pause

:end
endlocal
