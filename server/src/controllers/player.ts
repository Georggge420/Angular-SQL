import { Request, Response } from "express"

export const getPlayers = (req: Request,res: Response) => {
    
    res.json({
        msg: 'listo get products'
    })
}

export const getPlayer  = (req: Request,res: Response) => {

    const {id} = req.params;

    res.json({
        msg: 'listo get product',
        id
    }) 
}


export const deletePlayer  = (req: Request,res: Response) => {

    const {id} = req.params;

    res.json({
        msg: 'listo delete product',
        id
    }) 
}


export const postPlayer  = (req: Request,res: Response) => {

    const {body} = req;

    res.json({
        msg: 'listo post product',
        body
    }) 
}


export const updatePlayer  = (req: Request,res: Response) => {

    const {body} = req;
    const {id} = req.params;

    res.json({
        msg: 'listo update product',
        id,
        body
    }) 
}