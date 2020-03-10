import { calculateLimitAndOffset, paginate } from 'paginate-info';
import { Repository } from "typeorm";
import { connect } from "../Config/DB";
import { Grupo } from '../Models/interfaces/entities/Grupo';

export class GrupoRepository{

    private GrupoRepository:Repository<Grupo>;

    async getConnection(){
        if(!this.GrupoRepository){
            this.GrupoRepository = (await connect()).getRepository(Grupo);
        }
    }

    async saveGrupo(grupo:Grupo){
        await this.getConnection();
        return await this.GrupoRepository.save(grupo);
    }

    async getGrupo(id_grupo:number){
        await this.getConnection();
        return await this.GrupoRepository.findOne({id_grupo});
    }

    async deleteGrupo(id_grupo:number){
        await this.getConnection();
        return await this.GrupoRepository.delete({id_grupo});
    }

    async getAllGrupo(req,res){
        await this.getConnection();
        let grupos = await this.GrupoRepository.find();

        try {
            const { query: { currentPage, pageSize } } = req;

        const { limit, offset } = calculateLimitAndOffset (currentPage, pageSize);
        const count = grupos.length;
        const paginatedData = grupos.slice(offset, offset + limit);
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