import getConnection from "../db/database.js";

const getProducto = async (req,res)=>{
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT productos.ProductoID,productos.ProductoNombre,proveedores. Compania,categorias.CategoriaNombre,productos.CantidadPorUnidad,productos.PrecioUnitario,productos.UnidadesStock,productos.UnidadesPedidas,productos.NivelReorden,productos.Discontinuado FROM productos JOIN categorias ON productos.CategoriaID = categorias.CategoriaID JOIN proveedores ON productos.ProveedorID = proveedores.ProveedorID;")
        console.log(result);
        res.json(result)
        
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}



const addProducto = async (req,res)=>{
    const connection = await getConnection();
    const {ProductoNombre,ProveedorID,CategoriaID,CantidadPorUnidad,PrecioUnitario,UnidadesStock,UnidadesPedidas,NivelReorden,Discontinuado}=req.body
    const productos={
        ProductoNombre,ProveedorID,CategoriaID,CantidadPorUnidad,PrecioUnitario,UnidadesStock,UnidadesPedidas,NivelReorden,Discontinuado
    };
    const result = await connection.query('INSERT INTO productos SET ?',productos);
    res.json(result);
}

const getProductoId = async(req,res)=>{
    try {
        const connection = await getConnection();
        const {id}=req.params;
        const result = await connection.query("SELECT * FROM productos WHERE ProductoID=?",id);
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
        const result = await connection.query("DELETE FROM productos WHERE ProductoID=?",id);
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
        const {ProductoNombre,ProveedorID,CategoriaID,CantidadPorUnidad,PrecioUnitario,UnidadesStock,UnidadesPedidas,NivelReorden,Discontinuado}=req.body
        const producto = {
            ProductoNombre,
            ProveedorID,
            CategoriaID,
            CantidadPorUnidad,
            PrecioUnitario,
            UnidadesStock,
            UnidadesPedidas,
            NivelReorden,
            Discontinuado
        }
        const result = await connection.query("UPDATE empleados SET ? WHERE ProductoID=?",[producto,id]);
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