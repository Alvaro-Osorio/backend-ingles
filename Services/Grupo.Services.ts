import { GrupoDTO } from "../Models/DTO/grupo.DTO";
import { Grupo } from '../Models/interfaces/entities/Grupo';
import { GrupoRepository } from '../Repositories/Grupo.repostory';
import { Request, Response } from 'express';

export class GrupoService{
    private grupoRepository:GrupoRepository;
    constructor(){
        this.grupoRepository = new GrupoRepository();
    }


    async saveGrupo(grupo:GrupoDTO){
        if(!grupo.nombre_grupo) throw new Error("[400],Falta la propiedad nombre");
       
        let grupoToSave:Grupo = new Grupo();
        
        grupoToSave.nombre_grupo = grupo.nombre_grupo;
        
        return await this.grupoRepository.saveGrupo(grupoToSave);
    }

    async getGrupo(id:number){
        
        return await this.grupoRepository.getGrupo(id);
    }

    async deleteGrupo(id:number){
        
        return await this.grupoRepository.deleteGrupo(id);
    }

    async getAllGrupo(req:Request,res:Response){

       return await this.grupoRepository.getAllGrupo(req,res);
        
    }

}