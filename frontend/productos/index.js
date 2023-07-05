import {
 verCaregoria,
 insertCategoria,
 deleteCategoria,
 selectId,
 updateCategoria
} from "./API.js";

document.addEventListener("DOMContentLoaded", () => {
    mostrar()
});

/* LISTAR CATEGORIAS  - CRUD (R) */
async function mostrar(){
    const datos = await verCaregoria();
    datos.forEach((dato)=>{
        const {CategoriaID,CategoriaNombre,Descripcion,Imagen} = dato
        const body = document.querySelector('#categories');
        body.innerHTML+=`
            <tr>
                <th>${CategoriaID}</th>
                <td>${CategoriaNombre}</td>
                <td>${Descripcion}</td>
                <td>${Imagen}</td>
                <td><button type="submit" class="eliminar btn btn-danger" id=${CategoriaID}>Eliminar</button></td>
                <td><button type="submit" idUpdate=${CategoriaID} class="update btn btn-warning" data-bs-toggle="modal"
                data-bs-target="#updateCategory"
                data-bs-whatever="@getbootstrap">Editar</button></td>
                <td><button class="btn btn-primary">Detalles</button></td>
            </tr>
        `
    })
}

/* INGRESAR NUEVA CATEGORIA  - CRUD (C) */
const formulario = document.querySelector('#formulario');
formulario.addEventListener('submit',insertar);
async function insertar(e){
    e.preventDefault();
    const CategoriaNombre =document.querySelector('#CategoriaNombre').value;
    const Descripcion = document.querySelector('#Descripcion').value;
    const Imagen = document.querySelector('#Imagen').value;

    const datos = {
        CategoriaNombre,
        Descripcion,
        Imagen
    }
    console.log(datos);

    return insertCategoria(datos);
}


/* ELIMINAR CATEGORIA  - CRUD (D) */
const body = document.querySelector('#categories');
body.addEventListener('click',borrar);

async function borrar(e){
    if(e.target.classList.contains('eliminar')){
        const CategoriaID = e.target.getAttribute('id');
        deleteCategoria(CategoriaID);
    }
}


//SELECT ID

body.addEventListener('click',mostrarId)

async function mostrarId(e){
    if(e.target.classList.contains('update'));
    const CategoriaID = e.target.getAttribute('idUpdate');
    const datos = await selectId(CategoriaID);
    datos.forEach((dato)=>{
        const {CategoriaID,CategoriaNombre,Descripcion,Imagen}=dato;

        const nombre =document.querySelector('#CategoriaNombreUpdate');
        const descripcion = document.querySelector('#DescripcionUpdate');
        const imagen = document.querySelector('#ImagenUpdate');
        const id = document.querySelector('#idUpdate');

        nombre.value=CategoriaNombre;
        descripcion.value=Descripcion;
        imagen.value=Imagen;
        id.value=CategoriaID
    })
}



//EDITAR CATEGORIA - CRUD (U)

const formularioUpdate = document.querySelector('#formularioUpdate');
formularioUpdate.addEventListener('submit',update);
async function update(e){
    e.preventDefault();
    const id =document.querySelector('#idUpdate').value;
    const CategoriaNombre =document.querySelector('#CategoriaNombreUpdate').value;
    const Descripcion = document.querySelector('#DescripcionUpdate').value;
    const Imagen = document.querySelector('#ImagenUpdate').value;

    const datos = {
        CategoriaNombre,
        Descripcion,
        Imagen
    }
    console.log(datos,id);
    return updateCategoria(datos,id)
}