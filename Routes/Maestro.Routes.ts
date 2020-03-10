import { RouteBody } from "../Models/interfaces/RouteBody";
import { MaestroController } from '../Controllers/Maestro.controller';



export const MaestroRoutes:Array<RouteBody>=[
    {
        url:"/createMaestro",
        method:"post",
        controller:MaestroController,
        target:"createMaestro"
    },{
        url:"/deleteMaestro",
        method:"post",
        controller:MaestroController,
        target:"deleteMaestro"
    },{
        url:"/listmaestros",
        method: "get",
        controller:MaestroController,
        target: "getMaestros"
    },{
        url:"/listmaestro",
        method: "get",
        controller:MaestroController,
        target: "getMaestro"
    }
];