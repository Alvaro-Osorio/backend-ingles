import {ConnectionOptions, Connection,createConnection} from 'typeorm';
import { Alumno } from '../Models/interfaces/entities/Alumno';
import { Maestro } from '../Models/interfaces/entities/Maestro';
import { Grupo } from '../Models/interfaces/entities/Grupo';
import { Idioma } from '../Models/interfaces/entities/Idioma';
import { Calificacion } from '../Models/interfaces/entities/Calificacion';

const options:ConnectionOptions={
    type: "mysql",
    host:"localhost",
    port:3306,
    username: "root",
    password:"Alvaro455445.",
    database: "idiomas",
    synchronize: true,
    entities:[Alumno,Maestro,Grupo,Idioma,Calificacion]
};

let connection : Connection;

export const connect = async () => {
    if(connection){
        return connection;
    }else{
        connection = await createConnection(options);
        return connection;
    }
}