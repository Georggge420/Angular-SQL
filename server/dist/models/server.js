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
const cors_1 = __importDefault(require("cors"));
const player_1 = __importDefault(require("../routes/player"));
const coneccion_1 = __importDefault(require("../db/coneccion"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3001'; // Asegúrate de que este puerto esté configurado correctamente
        this.middlewares(); // Aquí se configura CORS
        this.routes();
        this.dbConnect();
    }
    middlewares() {
        // Permitir todas las orígenes (uso temporal solo en desarrollo)
        this.app.use((0, cors_1.default)()); // Aquí es donde agregas esta línea
        // Parsear el body a JSON
        this.app.use(express_1.default.json());
    }
    routes() {
        // Definir las rutas aquí
        this.app.use('/api/players', player_1.default);
    }
    dbConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield coneccion_1.default.authenticate();
                console.log('Base de datos conectada');
            }
            catch (error) {
                console.log('Error al conectarse a la base de datos:', error);
            }
        });
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }
}
exports.Server = Server;
