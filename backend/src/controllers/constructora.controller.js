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


const getIdConstructora = async(req,res)=>{
    try {
        const connection = await getConnection();
        const {id}=req.params;
        const result = await connection.query("SELECT * FROM constructoras WHERE id_constructora=?",id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const deleteConstructora = async(req,res)=>{
    try {
        const connection = await getConnection();
        const {id} = req.params;
        const result = await connection.query("DELETE FROM constructoras WHERE id_constructora=?",id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}


const updateConstructora = async (req,res)=>{
    try {
        const connection = await getConnection();
        const {id}=req.params;
        const {nombre_constructora,nit_constructora,email_contacto,telefono_contacto}=req.body
        const constructora = {
            nombre_constructora,
            nit_constructora,
            email_contacto,
            telefono_contacto,
        }
        const result = await connection.query("UPDATE constructoras SET ? WHERE id_constructora=?",[constructora,id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const methodsHTTP = {
    getConstructora,
    addConstructora,
    getIdConstructora,
    deleteConstructora,
    updateConstructora
}