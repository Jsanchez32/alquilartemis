import getConnection from "./../db/database.js";

const getConstructora = async (req,res)=>{
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM constructoras")
        console.log(result);
        res.json(result)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}


 const addConstructora = async (req,res)=>{
    try {
        const connection = await getConnection();
        const {nombre_constructora,nit_constructora,nombre_representante,email_contacto,telefono_contacto}=req.body;
        const contructor={
            nombre_constructora,nit_constructora,nombre_representante,email_contacto,telefono_contacto
        };
        const result = await connection.query('INSERT INTO constructoras SET ?',contructor)
        res.json(result)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}


export const methodsHTTP = {
    getConstructora,
    addConstructora
}