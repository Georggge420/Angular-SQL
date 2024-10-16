import express, { Application, Request, Response } from 'express';
import path from 'path'; // Necesitarás este módulo para manejar rutas
import routesPlayer from '../routes/player';
import cors from 'cors';
import db from '../db/coneccion';

export class Server {
    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.midlewares();
        this.routes();
        this.dbConnect();
        this.listen();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Aplicación corriendo en el puerto ${this.port}`);
        });
    }

    routes() {
        // Rutas de API
        this.app.use('/api/players', routesPlayer);

        // Cualquier otra ruta que no sea API, debe servir el archivo index.html
        this.app.get('*', (req: Request, res: Response) => {
            res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
        });
    }

    midlewares() {
        // Middleware para servir los archivos estáticos
        this.app.use(express.static(path.join(__dirname, '../build')));

        // Configurar CORS
        this.app.use(cors());

        // Parsear el body como JSON
        this.app.use(express.json());
    }

    async dbConnect() {
        try {
            await db.authenticate();
            console.log("Base de datos conectada");
        } catch (error) {
            console.log('Error al conectarse con la base de datos:', error);
        }
    }
}
