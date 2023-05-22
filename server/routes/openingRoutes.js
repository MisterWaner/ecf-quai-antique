import { Router } from "express";

import {
    createOpening,
    getAllOpenings,
    getOpening,
    updateOpening,
    deleteOpening,
} from "../controllers/openingController.js";

const openingRouter = Router();

openingRouter.post('/', createOpening);
openingRouter.get('/', getAllOpenings);
openingRouter.get('/:id', getOpening);
openingRouter.put('/:id', updateOpening);
openingRouter.delete('/:id', deleteOpening);

export default openingRouter;