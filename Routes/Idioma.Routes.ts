import { RouteBody } from "../Models/interfaces/RouteBody";
import { IdiomaController } from '../Controllers/Idioma.controller';


export const IdiomaRoutes:Array<RouteBody>=[
    {
        url:"/createidioma",
        method:"post",
        controller:IdiomaController,
        target:"createIdioma"
    },{
        url:"/deleteidioma",
        method:"delete",
        controller:IdiomaController,
        target:"deleteIdioma"
    },{
        url:"/listidiomas",
        method: "get",
        controller:IdiomaController,
        target: "getIdiomas"
    },{
        url:"showidioma",
        method: "get",
        controller:IdiomaController,
        target: "getIdioma"
        }
];