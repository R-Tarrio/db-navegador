# db-navegador

_Librería para gestionar de forma sencilla la base de datos del navegador indexedDB_

### Instalación 🔧

_Instala librería usando npm_

```
npm i db-navegador
```

_Luego importa la librera a tu código_

```
import coditaDB from 'db-navegador'
```
_La base de datos se crea una vez instanciado la configuración y no podras modificar los stores_
_y el nombre de la base de datos al menos que cambies de version DB_VERSION_

```
coditaDB.config({
  DB_NAME:"NAME_DB",
  DB_VERSION:1,
  STORES:[
    "NAME_STORE",
  ]
});
```

## Ejecutando las pruebas ⚙️

_Agregar datos a la base de datos_

	coditaDB.store("cache").saveCat({id:3, fruta:"Pera", peso:"250", medida:"Gramos"}).then(data=>{
		console.log(data);
	});

_La llave id es única, si se repite se actualiza la data completa, si envías un id distinto se considera otro dato_



_La función getStore() retornara toda la data del store indicado en la función store()_

_Para buscar elementos en la base de datos usa storeFind()_
_Esta función recibe dos parámetros KEY y VALUE_
_Pero antes debes mencionar en que stores realizaras la búsqueda usando la función store()_

```
coditaDB.store("cache").storeFind("fruta", "Pera").then(a=>{
  console.log(a);
});
```

## Autores ✒️

* **Rodrigo Tarrio** - *Trabajo Inicial* - [codita](https://codita.web.app)
* **Rodrigo Tarrio** - *Documentación* - [codita](https://codita.web.app)

## Nota
*Proyecto en desarrollo