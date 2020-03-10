import { RouteBody } from "../Models/interfaces/RouteBody";
import { CalificacionController } from '../Controllers/Calificacion.controller';


export const CalificacionRoutes:Array<RouteBody>=[
    {
        url:"/createcalificacion",
        method:"post", 
        controller:CalificacionController,
        target:"createCalificacion"
    },{
        url:"/deletecalificacion",
        method:"delete",
        controller:CalificacionController,
        target:"deleteCalificacion"
    },{
        url:"/listcalificaciones",
        method: "get",
        controller:CalificacionController,
        target: "getCalificaciones"
    },{
        url:"showcalificacion",
        method: "get",
        controller:CalificacionController,
        target: "getCalificacion"
        }
];