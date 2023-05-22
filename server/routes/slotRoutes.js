import { Router } from "express";
import {
    createSlot,
    getAllSlots,
    getSlot,
    updateSlot,
    deleteSlot,
} from "../controllers/slotController.js";

const slotRouter = Router();

slotRouter.post('/', createSlot);
slotRouter.get('/', getAllSlots);
slotRouter.get('/:id', getSlot);
slotRouter.put('/:id', updateSlot);
slotRouter.delete('/:id', deleteSlot);

export default slotRouter;