import {Entity,PrimaryGeneratedColumn,Column,OneToMany, ManyToMany, ManyToOne, JoinTable} from 'typeorm';
import { Calificacion } from './Calificacion';
import { Maestro } from './Maestro';
import { Alumno } from './Alumno';

@Entity({name:"grupos"})
export class Grupo{

    @PrimaryGeneratedColumn()
    id_grupo:number;

    @Column()
    nombre_grupo: string;

    @OneToMany(type => Calificacion, calificacion => calificacion.id_grupo)
    calificaciones:Calificacion[];

    @ManyToOne(type => Maestro, maestro => maestro.grupos)
    maestro:Maestro;

    @ManyToMany(type => Alumno, alumno=>alumno.grupos)
    @JoinTable()
    alumnos:Alumno[];
}  