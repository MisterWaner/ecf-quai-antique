//Import module
import {Router} from 'express';
import {createUser, getAllUsers, getUser, updateUser, deleteUser} from '../controllers/userController.js';

const userRouter = Router();

userRouter.get('/', getAllUsers);
userRouter.get('/:id', getUser);
userRouter.post('/', createUser);
userRouter.put('/:id', updateUser);
userRouter.delete('/:id', deleteUser);

export default userRouter;

