import express from 'express';
import multer from 'multer';
import passport from 'passport';
import { detail, getEdit, logout, postEdit, registInfo } from '../controllers/userController';
import { protectMiddleware, publicOnlyMiddleware } from '../middlewares';

const userRouter = express.Router();
const upload = multer();

userRouter.get('/logout', logout);
userRouter.post('/register-info', upload.array('couple_img'), registInfo);
// userRouter.post('/:id(\\d+)', detail);
userRouter.route('/edit').all(protectMiddleware).get(getEdit).post(postEdit);

export default userRouter;
