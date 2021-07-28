import express from 'express';
import passport from 'passport';
import { detail, getEdit, logout, postEdit } from '../controllers/userController';
import { protectMiddleware, publicOnlyMiddleware } from '../middlewares';

const userRouter = express.Router();

userRouter.get('/logout', logout);
// userRouter.post('/:id(\\d+)', detail);
userRouter.route('/edit').all(protectMiddleware).get(getEdit).post(postEdit);

export default userRouter;
