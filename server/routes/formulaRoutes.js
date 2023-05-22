import { Router } from "express";

import {
    createFormula,
    getAllFormulas,
    getFormula,
    updateFormula,
    deleteFormula,
} from "../controllers/formulaController.js";

const formulaRouter = Router()

formulaRouter.post('/', createFormula);
formulaRouter.get('/', getAllFormulas);
formulaRouter.get('/:id', getFormula);
formulaRouter.put('/:id', updateFormula);
formulaRouter.delete('/:id', deleteFormula);

export default formulaRouter;
