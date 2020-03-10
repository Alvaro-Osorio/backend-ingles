import * as ejs from 'ejs';
import  * as pdf from 'html-pdf';
import { AlumnoRepository } from "../Repositories/Alumno.repository";
import { AlumnoDTO } from "../Models/DTO/alumno.DTO";
import { Alumno } from '../Models/interfaces/entities/Alumno';
import { Request, Response } from 'express';
import path = require('path');

export class AlumnoService{
    private alumnoRepository:AlumnoRepository;
    constructor(){
        this.alumnoRepository = new AlumnoRepository();
    }

    async saveAlumno(alumno:AlumnoDTO){
        if(!alumno.nombre_alumno) throw new Error("[400],Falta la propiedad name");
        if(!alumno.apellido_p) throw new Error("[400],Falta la propiedad apellido paterno");
        if(!alumno.apellido_m) throw new Error("[400],Falta la propiedad apellido materno");

        let alumnoToSave:Alumno = new Alumno();
        
        alumnoToSave.nombre_alumno = alumno.nombre_alumno;
        alumnoToSave.carrera = alumno.carrera;
        alumnoToSave.no_control = alumno.no_control;
        alumnoToSave.semestre = alumno.semestre;
        alumnoToSave.apellido_p = alumno.apellido_p;
        alumnoToSave.apellido_m =alumno.apellido_m;
        
        return await this.alumnoRepository.saveAlumno(alumnoToSave);
    }


    async getAlumno(id_alumno:number){
        if(!id_alumno) throw new Error("[400],Falta la propiedad id");
        return await this.alumnoRepository.getAlumno(id_alumno);
    }


    async deleteAlumno(alumno:Alumno){

        if(!alumno) throw new Error("[400],Falta la propiedad id");

        return await this.alumnoRepository.deleteAlumno(alumno);
        
    }

    async generatePDF(req,res){

        let alumnos = await this.alumnoRepository.getAllAlumno(req,res);

        ejs.renderFile(path.join('./views/', `alumnos-calificaciones.ejs`), {alumnos: alumnos}, (err, data) => {
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

    async getAllAlumnos(req:Request,res:Response){
        
        return await this.alumnoRepository.getAlumnosDatos();

    }
}