
import { CalificacionRepository } from '../Repositories/Calificacion.repository';
import { CalificacionDTO } from '../Models/DTO/calificacion.DTO';
import { calculateLimitAndOffset, paginate } from 'paginate-info';
import { Calificacion } from '../Models/interfaces/entities/Calificacion';
import { Request, Response } from 'express';
import * as ejs from 'ejs';
import * as pdf from 'html-pdf';
import path = require('path');

export class CalificacionService{
    
    private calificcionRepository:CalificacionRepository;
    constructor(){
        this.calificcionRepository = new CalificacionRepository();
    }

    async saveCalificacion(calificacion:CalificacionDTO){

        if(!calificacion.calificacion) throw new Error("[400],Falta la propiedad calificacion");
        
        let calificacionToSave:Calificacion = new Calificacion();
        
        calificacionToSave.calificacion = calificacion.calificacion;
        calificacionToSave.id_alumno = calificacion.id_alumno;
        calificacionToSave.id_maestro = calificacion.id_maestro;
        calificacionToSave.id_grupo = calificacion.id_grupo;
       
        return await this.calificcionRepository.saveCalificacion(calificacionToSave);
    }

    async getCalificacion(id:number){
        if(!id) throw new Error("[400],Falta la propiedad id");
        
        return await this.calificcionRepository.getCalificacion(id);
    }

    async deleteCalificacion(id:number){
        
        return await this.calificcionRepository.deleteCalificacion(id);
    }

    async generatePDF(req,res){

        let calificaciones = await this.calificcionRepository.getAllCalificacion(req,res);

        ejs.renderFile(path.join('./views/', 'alumnos-calificaciones.ejs'), {calificaciones: calificaciones}, (err, data) => {
            if (err) {
                  res.send(err);
            } else {
                let options = {
                    "height": "11.25in",
                    "width": "8.5in",
                    "header": {
                        "height": "20mm"
                    },
                    "footer": {
                        "height": "20mm",
                    },
                };
                pdf.create(data, options).toFile("./Documents/report-alumnos.pdf", function (err, data) {
                    if (err) {
                        res.send(err);
                    } else {
                        res.send("File created successfully");
                    }
                });   
            }
        });
    }

    async getAllCalificacion(req:Request,res:Response){

        return await this.calificcionRepository.getAllCalificacion(req,res);
       
    }

}