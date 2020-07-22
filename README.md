# db-navegador

_Libreria para gestionar de forma sencilla la base de datos del navegador indexedDB_

### Instalación 🔧

_Instala libreria usando npm_

```
npm i db-navegador
```

_Luego inporta la librera a tu codigo_

```
import coditaDB from 'db-navegador'
```
_La base de datos se crea una vez instanciado la configuracion y no podras modificar los stores_
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

_Finaliza con un ejemplo de cómo obtener datos del sistema o como usarlos para una pequeña demo_

## Ejecutando las pruebas ⚙️

_Agregar datos a la base de datos_

	coditaDB.store("cache").saveCat({id:3, fruta:"Pera", peso:"250", medida:"Gramos"}).then(data=>{
		console.log(data);
	});

_La llave id es unica, si se repite se actualiza la data completa, si envias un id distinto se considera otro dato_



_La funcion getStore() retornara toda la data del store indicado en la funcon store()_

_Para buscar elementos en la base de datos usa storeFind()_
_Esta funcion recibe dos parametros KEY y VALUE_
_Pero antes debes mensionar en que stores realizaras la busqueda usando la funcion store()_

```
coditaDB.store("cache").storeFind("fruta", "Pera").then(a=>{
  console.log(a);
});
```

## Autores ✒️

* **Rodrigo Tarrio** - *Trabajo Inicial* - [codita](https://codita-6b9a2.web.app)
* **Rodrigo Tarrio** - *Documentación* - [codita](#codita)

<!-- ## Expresiones de Gratitud 🎁

* Comenta a otros sobre este proyecto 📢
* Invita una cerveza 🍺 o un café ☕ a alguien del equipo. 
* Da las gracias públicamente 🤓.
* etc. -->

## Nota
*Proyecto en desarrollo