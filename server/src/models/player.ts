import {DataTypes} from 'sequelize'
import db from '../db/coneccion'

const Playermod = db.define('jugadores',{
    ID_jugador: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nickname: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    id_juegos: {
        type: DataTypes.INTEGER
    },
},{
    createdAt: false,
    updatedAt: false
}
)

export default Playermod;
