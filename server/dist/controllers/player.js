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
exports.updatePlayer = exports.postPlayer = exports.deletePlayer = exports.getPlayer = exports.getPlayers = void 0;
const player_1 = __importDefault(require("../models/player"));
const getPlayers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listPlayer = yield player_1.default.findAll();
    res.json(listPlayer);
});
exports.getPlayers = getPlayers;
const getPlayer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const player1 = yield player_1.default.findByPk(id);
    if (player1) {
        res.json(player1);
    }
    else {
        res.status(404).json({
            msg: `no existe un player con el id ${id}`
        });
    }
});
exports.getPlayer = getPlayer;
const deletePlayer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const player1 = yield player_1.default.findByPk(id);
    if (!player1) {
        res.status(404).json({
            msg: `no existe un player con el id ${id}`
        });
    }
    else {
        yield player1.destroy();
        res.json({
            msg: `El jugador ${player1.nickname} se elmino con exito`
        });
    }
});
exports.deletePlayer = deletePlayer;
const postPlayer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield player_1.default.create(body);
        res.json({
            msg: `el player ${body.nickname} fue agregado con exito`
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `el player ${body.nickname} no fue agregado con exito`
        });
    }
});
exports.postPlayer = postPlayer;
const updatePlayer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const player1 = yield player_1.default.findByPk(id);
        if (player1) {
            yield player1.update(body);
            res.json({
                msg: `el player ${player1.nickname} fue actualizado con exito`
            });
        }
        else {
            res.status(404).json({
                msg: `no existe un player con el id ${id}`
            });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `el player ${body.nickname} no fue agregado con exito`
        });
    }
});
exports.updatePlayer = updatePlayer;
