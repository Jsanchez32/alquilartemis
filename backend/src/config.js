//6.Importamos config de dotenv//
import {config} from "dotenv"

//6.1.Lo inicializamos//
config();

//6.2.Exportamos los datos del env//

export default{
    host: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.DB_USER,
    password: process.env.PASSWORD
    
}