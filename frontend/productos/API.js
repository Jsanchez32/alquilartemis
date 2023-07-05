const url = "http://localhost:5000/api/productos";

export const verProductos = async ()=>{
    try {
        const productos = await fetch(url);
        const response = productos.json();
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const insertProductos = async (insertar)=>{
    try {
        await fetch(url,{
            method:'post',
            body:JSON.stringify(insertar),
            headers:{'Content-Type':'application/json'}
        })

    } catch (error) {
        console.log(error);
    }
}

export const deleteProducto = async (id)=>{
    try {
        await fetch(`${url}/${id}`,{
            method:'DELETE'
        })
    } catch (error) {
        console.log(error);
    }
}

export const updateProducto = async (actualizar,id)=>{
    try {
        await fetch(`${url}/${id}`,{
            method:'put',
            body:JSON.stringify(actualizar),
            headers:{'Content-Type':'application/json'}
        })

    } catch (error) {
        console.log(error);
    }
}

  export const selectId = async (id)=>{
    try {
        const producto = await fetch(`${url}/${id}`);
        const response = await producto.json();
        return response;
    } catch (error) {
        console.log(error);
    }
  }