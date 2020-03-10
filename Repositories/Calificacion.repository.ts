import { calculateLimitAndOffset, paginate } from 'paginate-info';
import { Repository } from "typeorm";
import { connect } from "../Config/DB";
import { Calificacion } from '../Models/interfaces/entities/Calificacion';

export class CalificacionRepository{

    private calificacionRepository:Repository<Calificacion>;

    async getConnection(){
        if(!this.calificacionRepository){
            this.calificacionRepository = (await connect()).getRepository(Calificacion);
        }
    }

    async saveCalificacion(calificacion:Calificacion){
        await this.getConnection();
        return await this.calificacionRepository.save(calificacion);
    }

    async getCalificacion(id_calificacion:number){
        await this.getConnection();
        return await this.calificacionRepository.findOne({id_calificacion});
    }

    async deleteCalificacion(id_calificacion:number){
        await this.getConnection();
        return await this.calificacionRepository.delete({id_calificacion});
    }

    async getAllCalificacion(req,res){
        await this.getConnection();

        let calificaciones = await this.calificacionRepository.find();

        try {
            const { query: { currentPage, pageSize } } = req;

        const { limit, offset } = calculateLimitAndOffset (currentPage, pageSize);
        const count = calificaciones.length;
        const paginatedData = calificaciones.slice(offset, offset + limit);
        const paginationInfo = paginate( currentPage , count, paginatedData);
        
        return (paginatedData);

        //return res.status(200).render('alumnos.ejs',{alumnos: paginatedData, meta:paginationInfo});
        //return res.render('alumnos.ejs',{alumnos: paginatedData},{meta: paginationInfo}) success: true,
        //data: { result: paginatedData, meta: paginationInfo }
        } catch (error) {
            console.log(error);
        }
    }
}