import {Router} from "express";

import { methodsHTTP as constructoraController} from "../controllers/constructora.controller.js";

const router = Router();

router.get("/",constructoraController.getConstructora)


export default router;
