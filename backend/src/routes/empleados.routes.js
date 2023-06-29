import { Router } from "express";
import { methodsHTTP as empleadoController } from "../controllers/empleado.controller.js";

const router = Router();

router.get("/",empleadoController.getEmpleado);
router.post("/",empleadoController.addEmpleado);
router.get("/:id",empleadoController.getIdEmpleado);
router.delete("/:id",empleadoController.deleteEmpleado);
router.put("/:id",empleadoController.updateEmpleado);

export default router;