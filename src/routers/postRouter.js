import express from 'express';
import multer from 'multer';
import {
  editPost,
  postList,
  removePost,
  removePostAll,
  storyDetail,
  writePost,
} from '../controllers/postController';

const postRouter = express.Router();
const upload = multer({ dest: 'public/photos/' });

postRouter.get('/list/:date', postList);
postRouter.get('/story/', storyDetail);
postRouter.post('/write', upload.array('datePhoto'), writePost);
postRouter.post('/edit/', editPost);
postRouter.post('/remove/', removePost);
postRouter.post('/remove-all', removePostAll);

export default postRouter;
