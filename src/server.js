import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import anniversaryRouter from './routers/anniversaryRouter';
import globalRouter from './routers/globalRouter';
import postRouter from './routers/postRouter';
import userRouter from './routers/userRouter';
import { localsMiddleware } from './middlewares';
import chartRouter from './routers/chartRouter';

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.DB_URL,
      ttl: 18 * 60 * 60,
      autoRemove: 'native',
    }),
  }),
);
app.use(localsMiddleware);
app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);
app.use('*/images', express.static('public/images'));
app.use('/', globalRouter);
app.use('/anniversary', anniversaryRouter);
app.use('/chart', chartRouter);
app.use('/post', postRouter);
app.use('/user', userRouter);

export default app;
