import express from 'express';
import multer from 'multer';

import {
  detail,
  getEdit,
  getRegistInfo,
  logout,
  postEdit,
  postRegistInfo,
} from '../controllers/userController';
import { protectMiddleware, publicOnlyMiddleware } from '../middlewares';

const userRouter = express.Router();
const upload = multer();

userRouter.get('/logout', logout);
userRouter
  .route('/register-info')
  .get(getRegistInfo)
  .post(upload.array('couple_img'), postRegistInfo);

// userRouter.post('/:id(\\d+)', detail);
userRouter.route('/edit').all(protectMiddleware).get(getEdit).post(postEdit);

export default userRouter;
