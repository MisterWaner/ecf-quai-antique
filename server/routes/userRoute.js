//Import module
import { Router } from "express";
import {
    getAllUsers,
    updateUser,
    deleteUser,
    getUserById
} from "../controllers/userController.js";

const userRouter = Router();

userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUserById);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);

export default userRouter;
