import { Request,Response } from 'express';
import { IdiomaService } from '../Services/Idioma.Service';
import { ErrorHandler } from '../Utils/Error.Handler';


export class IdiomaController extends ErrorHandler{
    private idiomaService:IdiomaService;

    constructor(){
        super();
        this.idiomaService = new IdiomaService();
    }

    async createIdioma(req:Request,res:Response){
        try{
            await this.idiomaService.saveIdioma(req.body);
            return res.status(201).send();
        }catch(err){
          console.log(err);
            return this.parser(err.message,res);
        } 
    }
   

    async deleteIdioma(req:Request,res:Response){
        try{
            let idioma = await this.idiomaService.getIdioma(req.body);
            await this.idiomaService.deleteIdioma(idioma[0]);
            return res.status(201).send();
        }catch(err){
            console.log(err);
            return this.parser(err.message,res);
        } 
    }

    async getIdioma(req:Request,res:Response){
        try{
            let idioma = await this.idiomaService.getIdioma(req.body);
            return res.json(idioma);
        }catch(err){
            console.log(err);
            return this.parser(err.message,res);
        } 
    }

    async getIdiomas(req:Request,res:Response){
        try{
            let idiomas = await this.idiomaService.getAllIdioma(req,res);
            return res.json(idiomas);
        }catch(err){
            console.log(err);
            return this.parser(err.message,res);
        } 
    }
}