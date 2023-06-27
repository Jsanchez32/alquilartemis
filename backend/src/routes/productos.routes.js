import { Router } from "express";
import { methodsHTTP as productoController} from "../controllers/producto.controller.js";

const router = Router();

router.get("/",productoController.getProducto);
router.post("/",productoController.addProducto);

export default router;