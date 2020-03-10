
import { IdiomaRepository } from '../Repositories/Idioma.repository';
import { IdiomaDTO } from '../Models/DTO/idioma.DTO';
import { calculateLimitAndOffset, paginate } from 'paginate-info';
import { Idioma } from '../Models/interfaces/entities/Idioma';
import { Request, Response } from 'express';

export class IdiomaService{
    private idiomaRepository:IdiomaRepository;
    constructor(){
        this.idiomaRepository = new IdiomaRepository();
    }


    async saveIdioma(idioma:IdiomaDTO){
        if(!idioma.nombre_idioma) throw new Error("[400],Falta la propiedad nombre del idioma");
        
        let idiomaToSave:Idioma = new Idioma();
        
        idiomaToSave.nombre_idioma = idioma.nombre_idioma;
       
        return await this.idiomaRepository.saveIdioma(idiomaToSave);
    }

    async getIdioma(id:number){
        
        return await this.idiomaRepository.getIdioma(id);
    }

    async deleteIdioma(id:number){
        
        return await this.idiomaRepository.deleteIdioma(id);
    }

    async getAllIdioma(req:Request,res:Response){
        
       return await this.idiomaRepository.getAllIdioma(req,res);

    }

}