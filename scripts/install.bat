@echo off
cd /d "%~dp0.."
call npm.cmd install
if errorlevel 1 exit /b 1
echo.
echo Kurulum tamamlandi. Calistirmak icin: scripts\dev.bat
