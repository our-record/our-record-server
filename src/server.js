import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import globalRouter from './routers/globalRouter';
import postRouter from './routers/postRouter';
import userRouter from './routers/userRouter';
import { localsMiddleware } from './middlewares';

const app = express();
let corsOption = {
  origin: 'http://localhost:3000',
  credentials: true,
};

app.use(cors(corsOption));
app.use(morgan('dev'));
app.use(express.json());
app.use(
  session({
    secret: 'blahTest',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.DB_URL }),
  }),
);
app.use(localsMiddleware);
app.use('/', globalRouter);
app.use('/post', postRouter);
app.use('/user', userRouter);

export default app;
