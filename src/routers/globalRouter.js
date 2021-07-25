import express from 'express';
import { home } from '../controllers/homeController';
import { join, login } from '../controllers/userController';
import { publicOnlyMiddleware } from '../middlewares';

const globalRouter = express.Router();

globalRouter.get('/', home);
globalRouter.get('/join', publicOnlyMiddleware, join);
globalRouter.get('/login', publicOnlyMiddleware, login);

export default globalRouter;
