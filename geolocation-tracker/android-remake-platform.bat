@echo off

echo Removing existing Android platform...
call cordova platform remove android

echo Creating new Android platform...
call cordova platform add android

echo Done.
pause