import express, {Application, Request, Response} from 'express';
import routesPlayer from '../routes/player';
import cors from 'cors';
import db from '../db/coneccion';

export class Server{
    private app: Application;
    private port: string;
    
    constructor(){
            console.log(process.env.PORT);
            this.app = express();
            this.port = process.env.PORT || '3001';
            this.midlewares();
            this.listen();
            this.routes();
            this.dbConnect();
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Aplicacion corriendo en el puerto ${this.port}`);
        })
    }

    routes(){
        this.app.get('/', (req: Request, res: Response) => {
            res.json({
                msg: 'API working'
            })
        })

        this.app.use('/api/players', routesPlayer);
    }

    midlewares(){

        this.app.use(cors({
            origin: 'http://localhost:4200' // Cambia esto por la dirección de tu frontend si es diferente
        }));

        //Parsear el body
        this.app.use(express.json());
    }

    async dbConnect(){

        try {
            await db.authenticate();
            console.log("base de datos conectada");
        } catch (error) {
            console.log(error);
            console.log('Error al conectarse con la base de datos');
        }

        
    }
}