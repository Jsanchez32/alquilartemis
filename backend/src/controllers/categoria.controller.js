import getConnection from "./../db/database.js"; 
const getCategoria = async (req,res)=>{
    try {
        //5.Mandamos la respuesta en json//
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM categorias")
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

}


// Method post//

//8. Creamos la funcion para el method post//
const addCategoria = async (req,res)=>{
    try {
        const connection = await getConnection();
        //10.Aplicamos Destructuring con los nombres de las tablas en la base de datos//
        const{CategoriaNombre,Descripcion,Imagen}=req.body;
        const category={CategoriaNombre,Descripcion,Imagen}
        const result = await connection.query('INSERT INTO categorias SET ?',category)
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const getIdCategoria = async (req,res)=>{
    try {
        const connection = await getConnection();
        const {id}= req.params;
        const result = await connection.query("SELECT * FROM categorias WHERE CategoriaID=?",id);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

}

const deleteCategoria = async (req,res)=>{
    try {
        const connection = await getConnection();
        const {id}= req.params;
        const result = await connection.query("DELETE FROM categorias WHERE CategoriaID=?",id);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

}

const updateCategoria = async (req,res)=>{
    try {
        const connection = await getConnection();
        //10.Aplicamos Destructuring con los nombres de las tablas en la base de datos//
        const{nombre_categoria,descripcion_categoria,img_categoria}=req.body;
        const {id}= req.params;
        const category={nombre_categoria,descripcion_categoria,img_categoria}
        const result = await connection.query('UPDATE categorias SET ? WHERE id_categoria=?',[category,id])
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

//5.1.Se encarga de mandar la respuesta//
//5.1.1. y se exportan para hacerlos globales//
export const methodsHTTP = {
    getCategoria,
    addCategoria,
    getIdCategoria,
    deleteCategoria,
    updateCategoria
}