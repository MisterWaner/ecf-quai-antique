//Import module
import { Router } from "express";
import { createUser } from "../controllers/inscriptionController.js";
import { getAdmin } from "../controllers/connectionController.js";


const router = Router();

router.post('/inscription', createUser);
router.get('/admin', getAdmin);

export default router;
