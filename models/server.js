const express = require('express');
const cors = require('cors');

// const db = require('../config');
class Server{
  constructor(){
    this.app = express();
    this.port = process.env.PORT || 8000;
    this.paths={
      auth:'/api',
    }
    // conectar a la base de datos
    // this.conectarDb()
    // middleware: son funcionalidads para el webserver
    this.middlewares();
    // rutas de mi app
    this.routes();
  }

  // async conectarDb(){
  //   try {
  //     await db.authenticate();
  //     console.log("db online")
  //   } catch (e)  {
  //     console.log(`Conection failed: ${e.message}`);
  //   }
  // }

  routes() {
    this.app.use(this.paths.auth, require(''))
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log(`Corriendo http://localhost:${this.port}`)
    });
  }

  middlewares() {
    // usar cors
    this.app.use(cors());

    // parseo de la info del body
    this.app.use(express.json())
    // directorio publico
    this.app.use(express.static("public"));

  }
}

module.exports = Server;
