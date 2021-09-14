import express from 'express';
import { home } from '../controllers/homeController';
import {
  finishGithubLogin,
  finishKakaoLogin,
  startGithubLogin,
  startKakaoLogin,
} from '../controllers/socialLoginController';
import { protectMiddleware, publicOnlyMiddleware } from '../middlewares';

const globalRouter = express.Router();

globalRouter.post('/', home);

// Github Login
globalRouter.get('/github/start', publicOnlyMiddleware, startGithubLogin);
globalRouter.get('/github/finish', publicOnlyMiddleware, finishGithubLogin);

// Kakao Login
globalRouter.get('/kakao', publicOnlyMiddleware, startKakaoLogin);
globalRouter.get('/kakao/callback', publicOnlyMiddleware, finishKakaoLogin);
globalRouter.get('/kakao/:id', publicOnlyMiddleware, startKakaoLogin);

export default globalRouter;
