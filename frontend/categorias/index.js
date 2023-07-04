import {
 verCaregoria,
 insertCategoria,
 deleteCategoria,
 updateCategoria

} from "./API.js";

document.addEventListener("DOMContentLoaded", () => {
    mostrar(),
    editCliente()
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
                <td><button type="submit" class="btn btn-warning" data-bs-toggle="modal"
                data-bs-target="#updateCategory"
                data-bs-whatever="@getbootstrap" idUpdate=${CategoriaID}>Editar</button></td>
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


//EDITAR CATEGORIA - CRUD (U)

const edit_nombre = document.querySelector("#CategoriaNombreUpdate");
const edit_descripcion = document.querySelector("#DescripcionUpdate");
const edit_imagen = document.querySelector("#ImagenUpdate");

const formularioEdit=document.querySelector('#formularioUpdate')
formularioEdit.addEventListener('submit',editCliente)

async function editCliente(e) {
      e.preventDefault();
      const CategoriaID = e.target.getAttribute('idUpdate');
      const dataJson = {
        CategoriaID: CategoriaID,
        CategoriaNombre: edit_nombre.value,
        Descripcion: edit_descripcion.value,
        Imagen: edit_imagen.value,
      };
      updateCategoria(CategoriaID);
}


