import { Router } from "express";

import {
    createCategory,
    deleteCategory,
    getAllCategories,
    getCategory,
    updateCategory,
} from "../controllers/categoryController.js";

const categoryRouter = Router();
categoryRouter.post('/', createCategory);
categoryRouter.get('/', getAllCategories);
categoryRouter.get('/:id', getCategory);
categoryRouter.put('/:id', updateCategory);
categoryRouter.delete('/:id', deleteCategory);

export default categoryRouter;
