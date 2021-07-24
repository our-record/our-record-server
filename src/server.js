import express from 'express';
import morgan from 'morgan';
import session from 'express-session';
import globalRouter from './routers/globalRouter';
import postRouter from './routers/postRouter';
import userRouter from './routers/userRouter';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(
  session({
    secret: 'blahTest',
    resave: true,
    saveUninitialized: true,
  }),
);
app.use('/', globalRouter);
app.use('/post', postRouter);
app.use('/user', userRouter);

export default app;
