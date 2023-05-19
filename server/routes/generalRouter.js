//Import module
import { Router } from "express";
import { createUser } from "../controllers/inscriptionController.js";
import { getUser } from "../controllers/userController.js";



const router = Router();

router.post('/inscription', createUser);
router.get('/connexion', getUser)

export default router;
