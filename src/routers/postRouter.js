import express from 'express';
import { detailPost, editPost, removePost, writePost } from '../controllers/postController';

const postRouter = express.Router();

postRouter.get('/write', writePost);
postRouter.get('/:id(\\d+)', detailPost);
postRouter.post('/:id(\\d+)/edit', editPost);
postRouter.post('/:id(\\d+)/remove', removePost);

export default postRouter;
