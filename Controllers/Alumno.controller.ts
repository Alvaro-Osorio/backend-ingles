import { Request,Response } from 'express';
import { AlumnoService } from '../Services/Alumno.Service';
import { ErrorHandler } from '../Utils/Error.Handler';

export class AlumnoController extends ErrorHandler{

    private alumnoService:AlumnoService;

    constructor(){
        super();
        this.alumnoService = new AlumnoService();
    }

    async createAlumno(req:Request,res:Response){
        try{
            await this.alumnoService.saveAlumno(req.body);
            return res.status(201).send();
        }catch(err){
            console.log(err);
            return this.parser(err.message,res);
        } 
    }

    async createPDF(req:Request,res:Response){
        try {
            await this.alumnoService.generatePDF(req,res);
        } catch (err) {
            console.log(err);
            return this.parser(err.message,res);
        }
    }

    async deleteAlumno(req:Request,res:Response){
        try{
            let alumno = await this.alumnoService.getAlumno(req.body);
            await this.alumnoService.deleteAlumno(alumno[0]);
            return res.status(200).send();
        }catch(err){
            console.log(err);
            return this.parser(err.message,res);
        } 
    }
    async getAlumno(req:Request,res:Response){
        try{
            let alumno = await this.alumnoService.getAlumno(req.body);
            return res.json(alumno);
        }catch(err){
            console.log(err);
            return this.parser(err.message,res);
        } 
    }

    async getAlumnos(req,res){
        try{
             let alumnos = await this.alumnoService.getAllAlumnos(req,res);  
             return res.json(alumnos);     
        }catch(err){
            console.log(err);
            return this.parser(err.message,res);
        } 
    }
}