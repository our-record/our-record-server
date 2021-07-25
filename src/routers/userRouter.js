import express from 'express';
import { finishGithubLogin, startGithubLogin } from '../controllers/socialLoginController';
import {
  detail,
  getEdit,
  login,
  logout,
  postEdit,
  register,
  remove,
} from '../controllers/userController';
import { protectMiddleware, publicOnlyMiddleware } from '../middlewares';

const userRouter = express.Router();

userRouter.get('/register', register);
userRouter.get('/logout', protectMiddleware, logout);
userRouter.get('/login', login);
userRouter.get('/github/start', publicOnlyMiddleware, startGithubLogin);
userRouter.get('/github/finish', publicOnlyMiddleware, finishGithubLogin);
// userRouter.post('/:id(\\d+)', detail);
userRouter.route('/edit').all(protectMiddleware).get(getEdit).post(postEdit);

export default userRouter;
