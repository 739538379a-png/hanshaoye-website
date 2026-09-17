@echo off
setlocal
cd /d "%~dp0"
set "NEXT_TELEMETRY_DISABLED=1"
set "PM2_HOME=C:\dev\hanshaoye-pm2"
set "PATH=C:\dev\npm-global;%PATH%"

if not exist "node_modules\" (
  call npm install
  if errorlevel 1 goto :failed
)

call npm run build
if errorlevel 1 goto :failed

call pm2 startOrReload ecosystem.config.cjs --only hanshaoye-website
if errorlevel 1 goto :failed

call pm2 save
echo.
echo The local service is running at http://localhost:3000
goto :end

:failed
echo.
echo The local service could not be started. Review the error above and try again.
pause

:end
endlocal
