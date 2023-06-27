import {Router} from "express";

import { methodsHTTP as constructoraController} from "../controllers/constructora.controller.js";

const router = Router();

router.get("/",constructoraController.getConstructora)
router.post("/",constructoraController.addConstructora)


export default router;
