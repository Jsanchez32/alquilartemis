import getConnection from "../db/database.js";

const getProducto = async (req,res)=>{
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT productos.id_producto,productos.nombre_producto,productos.precio_x_dia,productos.stock_producto,categorias.nombre_categoria FROM productos JOIN categorias ON productos.categoria_producto = categorias.id_categoria")
        console.log(result);
        res.json(result)
        
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}



const addProducto = async (req,res)=>{
    const connection = await getConnection();
    const {nombre_producto,precio_x_dia,stock_producto,categoria_producto}=req.body
    const productos={
        nombre_producto,precio_x_dia,stock_producto,categoria_producto
    };
    const result = await connection.query('INSERT INTO productos SET ?',productos);
    res.json(result);
}

const getProductoId = async(req,res)=>{
    try {
        const connection = await getConnection();
        const {id}=req.params;
        const result = await connection.query("SELECT * FROM productos WHERE id_producto=?",id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const deleteProducto = async(req,res)=>{
    try {
        const connection = await getConnection();
        const {id} = req.params;
        const result = await connection.query("DELETE FROM productos WHERE id_producto=?",id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}


const updateProducto = async (req,res)=>{
    try {
        const connection = await getConnection();
        const {id}=req.params;
        const {nombre_producto,precio_x_dia,stock_producto,categoria_producto}=req.body
        const producto = {
            nombre_producto,
            precio_x_dia,
            stock_producto,
            categoria_producto,
        }
        const result = await connection.query("UPDATE empleados SET ? WHERE id_empleado=?",[producto,id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}
export const methodsHTTP ={
    getProducto,
    addProducto,
    getProductoId,
    deleteProducto,
    updateProducto
}