import { Repository } from "typeorm";
import { connect } from "../Config/DB";
import { calculateLimitAndOffset, paginate } from 'paginate-info';
import { Idioma } from '../Models/interfaces/entities/Idioma';

export class IdiomaRepository{

    private IdiomaRepository:Repository<Idioma>;

    async getConnection(){
        if(!this.IdiomaRepository){
            this.IdiomaRepository = (await connect()).getRepository(Idioma);
        }
    }

    async saveIdioma(idioma:Idioma){
        await this.getConnection();
        return await this.IdiomaRepository.save(idioma);
    }

    async getIdioma(id_idioma:number){
        await this.getConnection();
        return await this.IdiomaRepository.findOne({id_idioma});
    }

    async deleteIdioma(id_idioma:number){
        await this.getConnection();
        return await this.IdiomaRepository.delete({id_idioma});
    }

    async getAllIdioma(req,res){
        await this.getConnection();
        let idiomas= await this.IdiomaRepository.find();
        try {
            const { query: { currentPage, pageSize } } = req;

        const { limit, offset } = calculateLimitAndOffset (currentPage, pageSize);
        const count = idiomas.length;
        const paginatedData = idiomas.slice(offset, offset + limit);
        const paginationInfo = paginate( currentPage , count, paginatedData);
      
        return (paginatedData);
        //return res.status(200).json({
        //  success: true,
        //  data: { result: paginatedData, meta: paginationInfo }
        //});
        } catch (error) {
            console.log(error);
        }

        
    }
}