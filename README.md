# Greenhouse 🍃
Greenhouse es un buscador para buscar el nombre científico y la descripción de cualquier árbol, planta u hongo.

![Greenhouse](https://i.imgur.com/zUuVAlQ.png)

## Frameworks y herramientas
- Server y backend: [NodeJS](https://nodejs.org/en/)
- Frontend: [React](https://es.reactjs.org/)
    - Carta: [carlita712](https://codepen.io/carlita712/pen/mNLzye)
    - Barra de búsqueda: [himalayasingh](https://codepen.io/himalayasingh/pen/dqjLgO)
- API: [MediaWiki](https://www.mediawiki.org/wiki/API:Main_page/es)

## Uso e instalación
La aplicación está diseñada de manera local y nunca se ha probado fuera de localhost.

### 1.- Descargar proyecto
```
git clone https://github.com/alesbe/greenhouse
```

### 2.- Instalar dependencias
Desde la consola de comandos, entrar a la carpeta del proyecto `greenhouse` y realizar:
```
npm install
```

### 3.- Encender el servidor de React
Desde la consola de comandos, entrar a la carpeta del proyecto `greenhouse` y realizar:
```
cd client
npm start
```

### 4.- Encender el servidor de NodeJS
Entramos a la carpeta del proyecto `greenhouse` y ejecutar:
```
npm start
```

### 5.- Abrir el proyecto
React está configurado en el puerto 3000, así que abriremos el navegador y entraremos a `http://localhost:3000/`, deberíamos ver la aplicación en funcionamiento.

## Notas adicionales
- El backend y el frontend funcionan como servidores independientes. NodeJS está alojado en el puerto 5000 y React en el puerto 3000.
- Si vas a usar esta aplicación para fines propios o comerciales, porfavor, respeta la mentalidad open-source y da credito a este repositorio.

alesbe. 🍃