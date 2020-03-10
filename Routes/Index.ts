



import { RouteBody } from "../Models/interfaces/RouteBody";

import { AlumnoRoutes } from "./Alumno.Routes";
import * as _ from 'lodash';
import { Initializer } from "../Config/Initiallizer";
import { CalificacionRoutes } from './Calificacion.Routes';
import { MaestroRoutes } from './Maestro.Routes';
import { GrupoRoutes } from './Grupo.Routes';
import { IdiomaRoutes } from './Idioma.Routes';


let init:Initializer = new Initializer();
const routesImported:Array<Array<RouteBody>>=[
   AlumnoRoutes,CalificacionRoutes,MaestroRoutes,GrupoRoutes,IdiomaRoutes 
];

export const RoutesToExpress:Array<RouteBody> = _.flattenDepth(routesImported,2).map((route:RouteBody)=>{
    route.controller =  init.getController(route.controller.name);
    return route;
})