import { Router } from "express";

import {
    createPermission,
    getAllPermissions,
    getPermission,
    updatePermission,
    deletePermission,
} from "../controllers/permissionController.js";

const permissionRouter = Router();

permissionRouter.post("/", createPermission);
permissionRouter.get("/", getAllPermissions);
permissionRouter.get("/:id", getPermission);
permissionRouter.put("/:id", updatePermission);
permissionRouter.delete("/:id", deletePermission);

export default permissionRouter;