import { Request, Response } from "express"
import Playermod from "../models/player"

export const getPlayers = async (req: Request,res: Response) => {
    const listPlayer = await Playermod.findAll()

    res.json(listPlayer)
}

export const getPlayer  = async (req: Request,res: Response) => {
    const {id} = req.params;
    const player1 = await Playermod.findByPk(id);

    if(player1){
        res.json(player1);
    }else{
        res.status(404).json({
            msg:`no existe un player con el id ${id}`
        })
    }
}


export const deletePlayer  = async (req: Request,res: Response) => {

    const {id} = req.params;
    const player1 = await Playermod.findByPk(id);

    if(!player1){
        res.status(404).json({
            msg:`no existe un player con el id ${id}`
        })
    }else{
        await player1.destroy();
        res.json({
            msg: `El jugador ${player1.nickname} se elmino con exito`
        })
    }
}


export const postPlayer  = async (req: Request,res: Response) => {

    const {body} = req;
    

    try {
        await Playermod.create(body);
        res.json({
            msg: `el player ${body.nickname} fue agregado con exito`
        })   
    } catch (error) {
        console.log(error);
        res.json({
            msg: `el player ${body.nickname} no fue agregado con exito`
        })  
    }
}


export const updatePlayer  = async(req: Request,res: Response) => {

    const {body} = req;
    const {id} = req.params;


    try {
        const player1 = await Playermod.findByPk(id);

        if(player1){
            await player1.update(body)
            res.json({
                msg: `el player ${player1.nickname} fue actualizado con exito`
            }) 
        }else{
            res.status(404).json({
                    msg:`no existe un player con el id ${id}`
            })
        }
    } catch (error) {
        console.log(error);
        res.json({
            msg: `el player ${body.nickname} no fue agregado con exito`
        })  
    }
    

}