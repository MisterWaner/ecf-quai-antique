//Import module
import { Router } from "express";
import {
    getAllUsers,
    updateUser,
    deleteUser,
} from "../controllers/userController.js";

const userRouter = Router();

userRouter.get("/", getAllUsers);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);

export default userRouter;
