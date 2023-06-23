import { Router } from "express";
import { methodsHTTP as empleadoController } from "../controllers/empleado.controller.js";

const router = Router();

router.get("/",empleadoController.getEmpleado)

export default router;