//Import module
import { Router } from "express";
import { createUser } from "../controllers/inscriptionController.js";


const router = Router();

router.post('/inscription', createUser);

export default router;
