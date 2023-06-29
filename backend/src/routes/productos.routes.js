import { Router } from "express";
import { methodsHTTP as productoController} from "../controllers/producto.controller.js";

const router = Router();

router.get("/",productoController.getProducto);
router.post("/",productoController.addProducto);
router.get("/:id",productoController.getProductoId);
router.delete("/:id",productoController.deleteProducto);
router.put("/:id",productoController.updateProducto);

export default router;