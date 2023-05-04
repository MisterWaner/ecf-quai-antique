//Import modules
import { Router } from "express";
import {createRole, getRole, getAllRoles, deleteRole} from '../controllers/roleController.js'


const roleRouter = Router();

roleRouter.get('/', getAllRoles);
roleRouter.get('/:id', getRole);
roleRouter.post('/', createRole);
roleRouter.delete('/:id', deleteRole);

export default roleRouter; 

