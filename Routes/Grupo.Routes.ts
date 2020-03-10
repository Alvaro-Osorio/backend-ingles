import { RouteBody } from "../Models/interfaces/RouteBody";
import { GrupoController } from '../Controllers/Grupo.controller';


export const GrupoRoutes:Array<RouteBody>=[
    {
        url:"/creategrupo",
        method:"post",
        controller:GrupoController,
        target:"createGrupo"
    },{
        url:"/deletegrupo",
        method:"delete",
        controller:GrupoController,
        target:"deleteGrupo"
    },{
        url:"/listgrupos",
        method: "get",
        controller:GrupoController,
        target: "getGrupos"
    },{
        url:"showgrupo",
        method: "get",
        controller:GrupoController,
        target: "getGrupo"
        }
];