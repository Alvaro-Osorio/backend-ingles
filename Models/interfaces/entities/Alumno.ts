import {Entity,PrimaryGeneratedColumn,Column,OneToMany, ManyToMany } from 'typeorm';
import { Calificacion } from "./Calificacion";
import { Grupo } from './Grupo';

@Entity({name:"alumnos"})
export class Alumno{

    @PrimaryGeneratedColumn()
    id_alumno:number;

    @Column()
    nombre_alumno: string;

    @Column() 
    carrera: string;

    @Column() 
    semestre: number;

    @Column() 
    no_control: string;

    @Column() 
    apellido_p: string;

    @Column()
    apellido_m: string;

    @OneToMany(type => Calificacion, calificacion => calificacion.id_alumno)
    calificaciones:Calificacion[];

    @ManyToMany(type => Grupo, grupo => grupo.alumnos)
    grupos:Grupo[] 
}