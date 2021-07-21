import express from 'express';
import {
  editPost,
  postList,
  removePost,
  storyDetail,
  writePost,
} from '../controllers/postController';

const postRouter = express.Router();

postRouter.get('/list/:date', postList);
postRouter.get('/story/', storyDetail);
postRouter.post('/write', writePost);
postRouter.post('/edit/:_id', editPost);
postRouter.post('/remove/', removePost);

export default postRouter;
