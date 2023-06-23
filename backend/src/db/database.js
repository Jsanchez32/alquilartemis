//7.Importamos el paquete mysql//
import mysql from "promise-mysql";
//7.1.Importamos el config//
import config from "./../config.js";

//7.2.Creamos la conexion con el paquete//
const conection = mysql.createConnection({
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password
})


const getConnection = () =>{
    return conection;
}

export default getConnection;