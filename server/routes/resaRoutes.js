import { Router } from "express";

import {
    createResa,
    getAllResas,
    getResa,
    updateResa,
    deleteResa,
} from "../controllers/resaController.js";

const resaRouter = Router();

resaRouter.post('/', createResa);
resaRouter.get('/', getAllResas);
resaRouter.get('/:id', getResa);
resaRouter.put('/:id', updateResa);
resaRouter.delete('/:id', deleteResa);

export default resaRouter;
