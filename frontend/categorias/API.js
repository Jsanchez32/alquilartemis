const url = "http://localhost:5000/api/categorias";

export const verCaregoria = async ()=>{
    try {
        const categoria = await fetch(url);
        const response = categoria.json();
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const insertCategoria = async (insertar)=>{
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

export const deleteCategoria = async (id)=>{
    try {
        await fetch(`${url}/${id}`,{
            method:'DELETE'
        })
    } catch (error) {
        console.log(error);
    }
}

export const updateCategoria = async (id)=>{
    try {
      await fetch(`${url}/${id}`,{
        method: 'PUT'
    });
    } catch (error) {
      console.log(error);
    }
  }