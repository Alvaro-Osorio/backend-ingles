import { Repository } from "typeorm";
import { calculateLimitAndOffset, paginate } from 'paginate-info';
import { connect } from "../Config/DB";
import { Maestro } from '../Models/interfaces/entities/Maestro';

export class MaestroRepository{

    private maestroRepository:Repository<Maestro>;

    async getConnection(){
        if(!this.maestroRepository){
            this.maestroRepository = (await connect()).getRepository(Maestro);
        }
    }

    async saveMaestro(maestro:Maestro){
        await this.getConnection();
        return await this.maestroRepository.save(maestro);
    }

    async getMaestro(id_maestro:number){
        await this.getConnection();
        return await this.maestroRepository.findOne({id_maestro});
    }

    async deleteMaestro(id_maestro:number){
        await this.getConnection();
        return await this.maestroRepository.delete({id_maestro});
    }

    async getAllMaestro(req,res){
        
        await this.getConnection();

        let maestros = await this.maestroRepository.find();
        try {
            const { query: { currentPage, pageSize } } = req;

        const { limit, offset } = calculateLimitAndOffset (currentPage, pageSize);
        const count = maestros.length;
        const paginatedData = maestros.slice(offset, offset + limit);
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