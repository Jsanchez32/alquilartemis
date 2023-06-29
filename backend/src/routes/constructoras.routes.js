import {Router} from "express";

import { methodsHTTP as constructoraController} from "../controllers/constructora.controller.js";

const router = Router();

router.get("/",constructoraController.getConstructora);
router.post("/",constructoraController.addConstructora);
router.get("/:id",constructoraController.getIdConstructora);
router.put("/:id",constructoraController.updateConstructora);
router.delete("/:id",constructoraController.deleteConstructora);


export default router;
