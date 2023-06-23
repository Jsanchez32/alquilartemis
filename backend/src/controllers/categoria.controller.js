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

//5.1.Se encarga de mandar la respuesta//
export const methodsHTTP = {
    getCategoria
}