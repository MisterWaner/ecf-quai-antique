import { Router } from "express";
import { login, logout, refresh, signIn } from "../controllers/authController.js";

const authRouter = Router();
authRouter.post('/signin', signIn);
authRouter.post('/login', login);
authRouter.get('/refresh', refresh);
authRouter.post('/logout', logout);

export default authRouter;
