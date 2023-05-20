//Import module
import { Router } from "express";
import { createUser } from "../controllers/inscriptionController.js";
import { getUser } from "../controllers/connectionController.js";



const router = Router();

router.post('/inscription', createUser);
router.post('/connexion', getUser)

export default router;
