import { RouteBody } from "../Models/interfaces/RouteBody";
import { AlumnoController } from '../Controllers/Alumno.controller';


export const AlumnoRoutes:Array<RouteBody>=[
    {
        url:"/createalumno",
        method:"post",
        controller:AlumnoController,
        target:"createAlumno"
    },{
        url:"/deletealumno",
        method:"delete",
        controller:AlumnoController,
        target:"deleteAlumno"
    },{
        url:"/listalumnos",
        method: "get",
        controller:AlumnoController,
        target: "getAlumnos"
    },{
        url:"/showalumno",
        method: "get",
        controller:AlumnoController,
        target: "getAlumno"
    },{
        url:"/create-alumnos-pdf",
        method: "get",
        controller:AlumnoController,
        target: "createPDF"
    }

];