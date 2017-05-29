rd dist /S /Q
rd build /S /Q
call npm run ngc
xcopy build\*.d.ts dist /s /Y /I
xcopy build\*.metadata.json dist /Y /I
call rollup build\stuff-lib.js -o dist\stuff-lib.js
xcopy package.json dist\