:: launcher script for jsdoc (with vsdoc)
:: Author: Jozef Izso
::

if "%JSDOCDIR%"=="" (
	set DOCDIR=
	set APPDIR=app
	set BASEDIR=.
) else (
	set DOCDIR="-Djsdoc.dir=%JSDOCDIR%"
	set APPDIR=%JSDOCDIR%\app
	set BASEDIR=%JSDOCDIR%
)

set TDIR=%BASEDIR%\templates\vsdoc

java -jar %BASEDIR%\jsrun.jar %APPDIR%\run.js -t=%TDIR% -c=vsdoc.conf
