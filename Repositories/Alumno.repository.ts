import { calculateLimitAndOffset, paginate } from 'paginate-info';
import { Repository } from "typeorm";
import { connect } from "../Config/DB";
import { Alumno } from '../Models/interfaces/entities/Alumno';


export class AlumnoRepository{

    private alumnoRepository:Repository<Alumno>;

    async getConnection(){
        if(!this.alumnoRepository){
            this.alumnoRepository = (await connect()).getRepository(Alumno);
        }
    }

    async saveAlumno(alumno:Alumno){
        await this.getConnection();
        return await this.alumnoRepository.save(alumno);
    }


    async getAlumno(id_alumno:number){
        await this.getConnection();
        return await this.alumnoRepository.findByIds([id_alumno]);
        
    }

    async deleteAlumno(alumno:Alumno){
        await this.getConnection();
        
        return await this.alumnoRepository.remove(alumno);
    }

    async getAllAlumno(req,res){

        await this.getConnection();
        
        let alumnos = await this.alumnoRepository.find();
        try {
            const { query: { currentPage, pageSize } } = req;

        const { limit, offset } = calculateLimitAndOffset (currentPage, pageSize);
        const count = alumnos.length;
        const paginatedData = alumnos.slice(offset, offset + limit);
        const paginationInfo = paginate( currentPage , count, paginatedData);
        
        return (paginatedData);

        //return res.status(200).render('alumnos.ejs',{alumnos: paginatedData, meta:paginationInfo});
        //return res.render('alumnos.ejs',{alumnos: paginatedData},{meta: paginationInfo}) success: true,
        //data: { result: paginatedData, meta: paginationInfo }
        } catch (error) {
            console.log(error);
        }
    }

    async getAlumnosDatos() {
        await this.getConnection();
        if (Error) throw Error;
        let sql = "select alumnos.nombre_alumno,alumnos.apellido_p,calificaciones.calificacion,grupos.nombre_grupo,maestros.nombre_maestro from calificaciones inner join alumnos on alumnos.id_alumno=calificaciones.idAlumnoIdAlumno inner join maestros on maestros.id_maestro=calificaciones.idMaestroIdMaestro inner join grupos on grupos.id_grupo=calificaciones.idGrupoIdGrupo;";
        let result = (await connect()).query(sql);
        console.log(result);
      }
}