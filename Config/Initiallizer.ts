import { PingController } from "../Controllers/Ping.Controller";
import { AlumnoController } from "../Controllers/Alumno.controller";
import { IdiomaController } from '../Controllers/Idioma.controller';
import { MaestroController } from '../Controllers/Maestro.controller';
import { GrupoController } from '../Controllers/Grupo.controller';
import { CalificacionController } from '../Controllers/Calificacion.controller';

export class Initializer{

    private pingController:PingController;
    private alumnoController:AlumnoController;
    private idiomaController:IdiomaController;
    private maestroController:MaestroController;
    private grupoController:GrupoController;
    private calificacionController:CalificacionController;
   
    constructor(){
        this.pingController = new PingController();
        this.alumnoController = new AlumnoController();
        this.idiomaController = new IdiomaController();
        this.maestroController = new MaestroController();
        this.grupoController = new GrupoController();
        this.calificacionController = new CalificacionController();
    }

    getController(prototype:string){
        switch(prototype){
            case PingController.name:
                return this.pingController;
                break;
            case AlumnoController.name:
                return this.alumnoController;
                break;
            case GrupoController.name:
                return this.grupoController;
                break;
            case IdiomaController.name:
                return this.idiomaController;
                break;
            case MaestroController.name:
                return this.maestroController;
                break;
            case CalificacionController.name:
                return this.calificacionController;
                break;                
            default:
                return null;
                break;
        }
    }
}