import express, { Application } from 'express';
import cors from 'cors';
import routesPlayer from '../routes/player';
import db from '../db/coneccion';

export class Server {
    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001'; // Asegúrate de que este puerto esté configurado correctamente
        this.middlewares(); // Aquí se configura CORS
        this.routes();
        this.dbConnect();
    }

    middlewares() {
        // Permitir todas las orígenes (uso temporal solo en desarrollo)
        this.app.use(cors()); // Aquí es donde agregas esta línea

        // Parsear el body a JSON
        this.app.use(express.json());
    }

    routes() {
        // Definir las rutas aquí
        this.app.use('/api/players', routesPlayer);
    }

    async dbConnect() {
        try {
            await db.authenticate();
            console.log('Base de datos conectada');
        } catch (error) {
            console.log('Error al conectarse a la base de datos:', error);
        }
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }
}
