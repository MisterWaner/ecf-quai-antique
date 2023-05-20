//Import module
import { Router } from "express";
import {
    getAllUsers,
    updateUser,
    deleteUser,
    getByRole
} from "../controllers/userController.js";

const userRouter = Router();

userRouter.get("/", getAllUsers);
userRouter.get("/role", getByRole);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);

export default userRouter;
