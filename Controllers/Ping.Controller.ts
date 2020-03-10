



import {Request,Response} from 'express';
export class PingController{   
   
    async getPing(req:Request,res:Response){
        return res.status(200).send({msg:"Pong"});
    }
}