import express from 'express';
import multer from 'multer';
import path from 'path';
import {
  editPost,
  postDetail,
  postList,
  removePost,
  removePostAll,
  storyDetail,
  writePost,
} from '../controllers/postController';

const postRouter = express.Router();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images/');
  },
  filename(req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, path.basename(file.originalname, ext) + '-' + Date.now() + ext);
  },
});

const uploadWithOriginalFileName = multer({ storage: storage });

postRouter.get('/story/', storyDetail);
postRouter.post('/detail', postDetail);
postRouter.post('/list/', postList);
postRouter.post('/write', uploadWithOriginalFileName.single('datePhoto'), writePost);
postRouter.post('/edit/', uploadWithOriginalFileName.single('datePhoto'), editPost);
postRouter.post('/remove/', removePost);
postRouter.post('/remove-all', removePostAll);

export default postRouter;
