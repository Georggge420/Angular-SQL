"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePlayer = exports.postPlayer = exports.deletePlayer = exports.getPlayer = exports.getPlayers = void 0;
const getPlayers = (req, res) => {
    res.json({
        msg: 'listo get products'
    });
};
exports.getPlayers = getPlayers;
const getPlayer = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'listo get product',
        id
    });
};
exports.getPlayer = getPlayer;
const deletePlayer = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'listo delete product',
        id
    });
};
exports.deletePlayer = deletePlayer;
const postPlayer = (req, res) => {
    const { body } = req;
    res.json({
        msg: 'listo post product',
        body
    });
};
exports.postPlayer = postPlayer;
const updatePlayer = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    res.json({
        msg: 'listo update product',
        id,
        body
    });
};
exports.updatePlayer = updatePlayer;
