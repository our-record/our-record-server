import express from 'express';
import { home } from '../controllers/homeController';
import {
  finishGithubLogin,
  finishKakaoLogin,
  startGithubLogin,
  startKakaoLogin,
} from '../controllers/socialLoginController';
import { login } from '../controllers/userController';
import { publicOnlyMiddleware } from '../middlewares';

const globalRouter = express.Router();

globalRouter.get('/', home);
globalRouter.get('/login', publicOnlyMiddleware, login);

// Github Login
globalRouter.get('/github/start', publicOnlyMiddleware, startGithubLogin);
globalRouter.get('/github/finish', publicOnlyMiddleware, finishGithubLogin);

// Kakao Login
globalRouter.get('/kakao', publicOnlyMiddleware, startKakaoLogin);
globalRouter.get('/kakao/callback', publicOnlyMiddleware, finishKakaoLogin);

export default globalRouter;
