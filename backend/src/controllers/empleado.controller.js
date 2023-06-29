import getConnection from "../db/database.js";

const getEmpleado = async (req,res)=>{
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM empleados");
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}



const addEmpleado = async(req,res)=>{
    try {
        const connection = await getConnection();
        const{nombre_empleado,email_empleado,celular_empleado,password_empleado}=req.body;
        const empleado={
            nombre_empleado,email_empleado,celular_empleado,password_empleado
        };
        const result = await connection.query("INSERT INTO empleados SET ?",empleado);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}


const getIdEmpleado = async (req,res)=>{
    try {
        const connection = await getConnection();
        const {id} = req.params;
        const result = await connection.query("SELECT * FROM empleados WHERE id_empleado=?",id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const deleteEmpleado = async (req,res)=>{
    try {
        const connection = await getConnection();
        const {id} = req.params;
        const result = connection.query("DELETE FROM empleados WHERE id_empleado=?",id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const updateEmpleado = async (req,res)=>{
    try {
        const connection = await getConnection();
        const {id}=req.params;
        const {nombre_empleado,email_empleado,celular_empleado,password_empleado}=req.body
        const requery={
            nombre_empleado,
            email_empleado,
            celular_empleado,
            password_empleado
        }
        const result = connection.query('UPDATE empleados SET ? WHERE id_empleado=?',[requery,id])
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const methodsHTTP ={
    getEmpleado,
    addEmpleado,
    getIdEmpleado,
    deleteEmpleado,
    updateEmpleado
}