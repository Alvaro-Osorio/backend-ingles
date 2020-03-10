
import { MaestroRepository } from "../Repositories/Maestro.repository";
import { MaestroDTO } from "../Models/DTO/maestro.DTO";
import { Maestro } from '../Models/interfaces/entities/Maestro';
import { Request, Response } from 'express';

export class MaestroService{
    private maestroRepository:MaestroRepository;
    constructor(){
        this.maestroRepository = new MaestroRepository();
    }


    async saveMaestro(maestro:MaestroDTO){
        if(!maestro.nombre_maestro) throw new Error("[400],Falta la propiedad name");
        if(!maestro.apellido) throw new Error("[400],Falta la propiedad apellido paterno");
        
        let maestroToSave:Maestro = new Maestro();
        
        maestroToSave.nombre_maestro = maestro.nombre_maestro;
        maestroToSave.curp = maestro.curp;
        maestroToSave.rfc = maestro.rfc;
        maestroToSave.direccion = maestro.direccion;
        maestroToSave.apellido = maestro.apellido;
       
        return await this.maestroRepository.saveMaestro(maestroToSave);
    }

    async getMaestro(id:number){
        
        return await this.maestroRepository.getMaestro(id);
    }

    async deleteMaestro(id:number){
        
        return await this.maestroRepository.deleteMaestro(id);
    }

    async getAllMaestro(req:Request,res:Response){
        
        await this.maestroRepository.getAllMaestro(req,res);
      
    }

}