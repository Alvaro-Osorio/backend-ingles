import {Entity,PrimaryGeneratedColumn,Column,OneToMany,ManyToMany} from 'typeorm';
import { Calificacion } from './Calificacion';
import { Grupo } from './Grupo';
import { Idioma } from './Idioma';

@Entity({name:"maestros"})
export class Maestro{

    @PrimaryGeneratedColumn()
    id_maestro:number;

    @Column()
    nombre_maestro: string;

    @Column() 
    rfc: string;

    @Column() 
    curp: string;

    @Column() 
    direccion: string;

    @Column({name:"apellido"})
    apellido: string;
 
    @OneToMany(type =>Calificacion, calificacion => calificacion.id_maestro)
    calificaciones:Calificacion[];
     
    @OneToMany(type =>Grupo, grupo => grupo.maestro)
    grupos:Grupo[];
      
    @ManyToMany(type => Idioma, idioma => idioma.maestros)
    idiomas:Idioma[]
    
}