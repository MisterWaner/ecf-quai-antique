import { Router } from "express";
import {
    createCarte,
    getAllCartes,
    getCarte,
    updateCarte,
    deleteCarte,
} from "../controllers/carteController.js";

const carteRouter = Router();

carteRouter.get("/", getAllCartes);
carteRouter.get("/:id", getCarte);
carteRouter.post("/", createCarte);
carteRouter.put('/:id', updateCarte);
carteRouter.delete('/:id', deleteCarte);

export default carteRouter;
