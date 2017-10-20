# Testeo de API REST con Mocha y Chai HTTP.

Este API está escrito en nodejs utilizando restify

El API lo encontramos en el fichero server.js

Los test se encuentran en la carpeta test y en el fichero testChaiHTTP.js

Para la realización de los test hemos utilizado Mocha, Chai y Chai HTTP

## Instalación
Instalamos las dependencias del sistema

```
$ npm install
```

## Ejecucion

Una descargadas las dependencias lanzamos el servidor que contiene la API

```
$ node server.js
```

## Ejecucion de los test

para lanzar la ejecucion de los test utilizamos el comando

```
$ mocha test/*.js --timeout 15000
```
 