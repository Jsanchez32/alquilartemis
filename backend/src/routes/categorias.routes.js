//4.Importamos el Router de express//
import { Router } from "express";

//5.2.Importamos el methods para mandarlo en respuesta//
import { methodsHTTP as categoriaController } from "../controllers/categoria.controller.js";

//4.1.Declaramos en una variable lo que importamos//
const router = Router();

//4.3.Se manda la respuesta//
router.get("/", categoriaController.getCategoria);
//8.2.Se manda la respuesta pero en formato post//
router.post("/", categoriaController.addCategoria);

//4.2.Lo exportamos para tenerlo global//
export default router;