import express from 'express';
import multer from 'multer';
import path from 'path';
import {
  editPost,
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
const upload = multer({ dest: 'public/images' });
const uploadWithOriginalFileName = multer({ storage: storage });

postRouter.post('/list/', postList);
postRouter.post('/write', uploadWithOriginalFileName.single('datePhoto'), writePost);
postRouter.post('/edit/', uploadWithOriginalFileName.single('datePhoto'), editPost);
postRouter.post('/remove/', removePost);
postRouter.post('/remove-all', removePostAll);
postRouter.get('/story/', storyDetail);

export default postRouter;
