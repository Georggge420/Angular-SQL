"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path")); // Necesitarás este módulo para manejar rutas
const player_1 = __importDefault(require("../routes/player"));
const cors_1 = __importDefault(require("cors"));
const coneccion_1 = __importDefault(require("../db/coneccion"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
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
        this.app.use('/api/players', player_1.default);
        // Cualquier otra ruta que no sea API, debe servir el archivo index.html
        this.app.get('*', (req, res) => {
            res.sendFile(path_1.default.resolve(__dirname, '../build', 'index.html'));
        });
    }
    midlewares() {
        // Middleware para servir los archivos estáticos
        this.app.use(express_1.default.static(path_1.default.join(__dirname, '../build')));
        // Configurar CORS
        this.app.use((0, cors_1.default)());
        // Parsear el body como JSON
        this.app.use(express_1.default.json());
    }
    dbConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield coneccion_1.default.authenticate();
                console.log("Base de datos conectada");
            }
            catch (error) {
                console.log('Error al conectarse con la base de datos:', error);
            }
        });
    }
}
exports.Server = Server;
