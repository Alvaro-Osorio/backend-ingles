import {Entity,PrimaryGeneratedColumn,Column, ManyToMany, JoinTable} from 'typeorm';
import { Maestro } from './Maestro';

@Entity({name:"idiomas"})
export class Idioma{

    @PrimaryGeneratedColumn()
    id_idioma:number;

    @Column()
    nombre_idioma: string;

    @ManyToMany(type => Maestro, maestro => maestro.idiomas)
    @JoinTable()
    maestros:Maestro[];
}