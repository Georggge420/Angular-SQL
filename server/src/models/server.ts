import express, {Application, Request, Response} from 'express';
import routesPlayer from '../routes/player';

export class Server{
    private app: Application;
    private port: string;
    
    constructor(){
            console.log(process.env.PORT);
            this.app = express();
            this.port = process.env.PORT || '3001';
            this.listen();
            this.midlewares();
            this.routes();
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
        //Parsear el body
        this.app.use(express.json());
    }
}