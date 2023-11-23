"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const coneccion_1 = __importDefault(require("../db/coneccion"));
const Playermod = coneccion_1.default.define('jugadores', {
    ID_jugador: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    nickname: {
        type: sequelize_1.DataTypes.STRING
    },
    password: {
        type: sequelize_1.DataTypes.STRING
    },
    id_juegos: {
        type: sequelize_1.DataTypes.INTEGER
    },
}, {
    createdAt: false,
    updatedAt: false
});
exports.default = Playermod;
