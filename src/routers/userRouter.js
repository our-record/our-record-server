import express from 'express';
import multer from 'multer';
import path from 'path';

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

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images/');
  },
  filename(req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, path.basename(file.originalname, ext) + '-' + Date.now() + ext);
  },
});
const upload = multer({ dest: 'public/images' });
const uploadWithOriginalFileName = multer({ storage: storage });

userRouter.get('/logout', logout);
userRouter
  .route('/register-info')
  .get(getRegistInfo)
  .post(uploadWithOriginalFileName.single('couple_img'), postRegistInfo);

userRouter
  .route('/edit')
  .all(protectMiddleware)
  .get(getEdit)
  .post(uploadWithOriginalFileName.single('couple_img'), postEdit);

export default userRouter;
