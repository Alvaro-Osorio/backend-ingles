import { Request,Response } from 'express';
import { MaestroService } from '../Services/Maestro.Service';
import { ErrorHandler } from '../Utils/Error.Handler';

export class MaestroController extends ErrorHandler{

    private maestroService:MaestroService;
    
    constructor(){
        super();
        this.maestroService = new MaestroService();
    }

    async createMaestro(req:Request,res:Response){
        try{
            await this.maestroService.saveMaestro(req.body);
            return res.status(201).send();
        }catch(err){
            console.log(err);
            return this.parser(err.message,res);
        } 
    }    

    async deleteMaestro(req:Request,res:Response){
        try{
            let maestro = await this.maestroService.getMaestro(req.body);
            await this.maestroService.deleteMaestro(maestro[0]);
            return res.status(200).send();
        }catch(err){
            console.log(err);
            return this.parser(err.message,res);
        } 
    }
    async getMaestro(req:Request,res:Response){
        try{
            let maestro = await this.maestroService.getMaestro(req.body);
            return res.json(maestro);
        }catch(err){
            console.log(err);
            return this.parser(err.message,res);
        } 
    }

    async getMaestros(req:Request,res:Response){
        try{
            let maestros = await this.maestroService.getAllMaestro(req,res);
            return res.json(maestros);
        }catch(err){
            console.log(err);
            return this.parser(err.message,res);
        } 
    }

}