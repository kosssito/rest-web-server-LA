const express = require('express')
const cors = require('cors');

const { dbConnection } = require('../database/config');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        
        // rutas de mi applicacion
        this.rutas = [
        ['/api/default', '../routes/default.js'],
        ['/api/default2', '../routes/default2.js']
        ]
        this.routes(this.rutas);

        //conectar a base de datos
        this.conectarDB();

        //Middlewares
        this.middlewares();

    }

    async conectarDB(){
        await dbConnection();
    }

    middlewares(){
        //cors
        this.app.use(cors() );

        // Lectura y parseo del body
        this.app.use( express.json() );

        //directorio publico
        this.app.use( express.static('public') );
    }

    routes(arrApi){
        arrApi.forEach(e => {
            this.app.use( e[0], require(e[1]));
        });
    }


    listen(){
        this.app.listen(this.port, ()=> {
            console.log('Servidor corriendo en puerto', this.port);
        } );
    }



}


module.exports = Server;