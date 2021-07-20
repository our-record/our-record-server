import express from 'express';
import morgan from 'morgan';
import globalRouter from './routers/globalRouter';
import postRouter from './routers/postRouter';
import userRouter from './routers/userRouter';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', globalRouter);
app.use('/post', postRouter);
app.use('/users', userRouter);

export default app;
