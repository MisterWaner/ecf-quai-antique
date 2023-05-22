import { Router } from "express";
import {
    createDish,
    getAllDishes,
    getDish,
    updateDish,
    deleteDish,
} from "../controllers/dishController.js";

const dishRouter = Router();

dishRouter.get("/", getAllDishes);
dishRouter.get("/:id", getDish);
dishRouter.post("/", createDish);
dishRouter.put('/:id', updateDish);
dishRouter.delete('/:id', deleteDish);

export default dishRouter;
