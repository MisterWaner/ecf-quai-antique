import { Router } from "express";

import {
    getAllMenus,
    getMenu,
    createMenu,
    deleteMenu,
    updateMenu,
} from "../controllers/menuController.js";

const menuRouter = Router();

menuRouter.get('/', getAllMenus);
menuRouter.get('/:id', getMenu);
menuRouter.post('/', createMenu);
menuRouter.put('/:id', updateMenu);
menuRouter.delete('/:id', deleteMenu);

export default menuRouter;