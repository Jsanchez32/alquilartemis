import { Router } from "express";
import { methodsHTTP as empleadoController } from "../controllers/empleado.controller.js";

const router = Router();

router.get("/",empleadoController.getEmpleado);
router.post("/",empleadoController.addEmpleado);

export default router;