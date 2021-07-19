import express from 'express';
import { detail, edit, logout, remove } from '../controllers/userController';

const userRouter = express.Router();

userRouter.post('/logout', logout);
userRouter.post('/:id(\\d+)', detail);
userRouter.post('/:id(\\d+)/edit', edit);
userRouter.post('/:id(\\d+)/remove', remove);

export default userRouter;