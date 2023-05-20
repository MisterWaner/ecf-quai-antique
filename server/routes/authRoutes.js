import { Router } from "express";
import { getUser } from "../controllers/connectionController.js";

const authRouter = Router();

authRouter.post('/connexion', getUser);

export default authRouter;
