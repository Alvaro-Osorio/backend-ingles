import { Alumno } from '../interfaces/entities/Alumno';
import { Maestro } from '../interfaces/entities/Maestro';
import { Grupo } from '../interfaces/entities/Grupo';

export class CalificacionDTO{
    calificacion:string;
    id_alumno:Alumno;
    id_maestro:Maestro;
    id_grupo:Grupo;
    
}

