import { Request,Response } from 'express';
import { CalificacionService } from '../Services/Calificacion.Service';
import { ErrorHandler } from '../Utils/Error.Handler';

export class CalificacionController extends ErrorHandler{

    private calificacionService:CalificacionService;

    constructor(){
        super();
        this.calificacionService = new CalificacionService();
    }

    async createCalificacion(req:Request,res:Response){
        try{
            await this.calificacionService.saveCalificacion(req.body);
            return res.status(201).send();
        }catch(err){
            console.log(err);
            return this.parser(err.message,res);
        } 
    }

    //async createPDF(req:Request,res:Response){
    //    try {
    //        await this.calificacionService.generatePDF();
    //        return res.status(201).send();
    //    } catch (err) {
    //        console.log(err);
    //        return this.parser(err.message,res);
    //    }
    //}

    async deleteCalificacion(req:Request,res:Response){
        try{
            let calificacion = await this.calificacionService.getCalificacion(req.body);
            await this.calificacionService.deleteCalificacion(calificacion[0]);
            return res.status(200).send();
        }catch(err){
            console.log(err);
            return this.parser(err.message,res);
        } 
    }
    async getCalificacion(req:Request,res:Response){
        try{
            let calificacion = await this.calificacionService.getCalificacion(req.body);
            return res.json(calificacion);
        }catch(err){
            console.log(err);
            return this.parser(err.message,res);
        } 
    }

    async getCalificaciones(req:Request,res:Response){
        try{
            let calificaciones = await this.calificacionService.getAllCalificacion(req,res);
            return res.json(calificaciones);
        }catch(err){
            console.log(err);
            return this.parser(err.message,res);
        } 
    }
}