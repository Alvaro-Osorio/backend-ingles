import {Entity,PrimaryGeneratedColumn,Column,ManyToOne} from 'typeorm';
import { Alumno } from "./Alumno";
import { Grupo } from './Grupo';
import { Maestro } from './Maestro';

@Entity({name:"calificaciones"})
export class Calificacion{

    @PrimaryGeneratedColumn()
    id_calificacion:number;

    @Column()
    calificacion: string;

    @ManyToOne(type => Alumno, alumno => alumno.calificaciones)
    id_alumno:Alumno;

    @ManyToOne(type => Maestro, maestro => maestro.calificaciones)
    id_maestro:Maestro;

    @ManyToOne(type => Grupo, grupo => grupo.calificaciones)
    id_grupo:Grupo;
}