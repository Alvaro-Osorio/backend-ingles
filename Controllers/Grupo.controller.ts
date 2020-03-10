import { Request,Response } from 'express';
import { GrupoService } from '../Services/Grupo.Services';
import { ErrorHandler } from '../Utils/Error.Handler';

export class GrupoController extends ErrorHandler{

    private grupoService:GrupoService;

    constructor(){
        super();
        this.grupoService = new GrupoService();
    }

    async createGrupo(req:Request,res:Response){
        try{
            await this.grupoService.saveGrupo(req.body);
            return res.status(201).send();
        }catch(err){
            console.log(err);
            return this.parser(err.message,res);
        } 
    }

    //async createPDF(req:Request,res:Response){
    //    try {
    //        await this.grupoService.generatePDF();
    //        return res.status(201).send();
    //    } catch (err) {
    //        console.log(err);
    //        return this.parser(err.message,res);
    //    }
    //}


    async deleteGrupo(req:Request,res:Response){
        try{
            let grupo = await this.grupoService.getGrupo(req.body);
            await this.grupoService.deleteGrupo(grupo[0]);
            return res.status(200).send();
        }catch(err){
            console.log(err);
            return this.parser(err.message,res);
        } 
    }
    async getGrupo(req:Request,res:Response){
        try{
            let grupo = await this.grupoService.getGrupo(req.body);
            return res.json(grupo);
        }catch(err){
            console.log(err);
            return this.parser(err.message,res);
        } 
    }

    async getGrupos(req:Request,res:Response){
        try{
            let grupos = await this.grupoService.getAllGrupo(req,res);
            return res.json(grupos);
        }catch(err){
            console.log(err);
            return this.parser(err.message,res);
        } 
    }
}