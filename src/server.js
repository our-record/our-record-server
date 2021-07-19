import './db';
import './models/Post';
import express from 'express';
import morgan from 'morgan';
import globalRouter from './routers/globalRouter';
import postRouter from './routers/postRouter';
import userRouter from './routers/userRouter';

const PORT = 4000;
const app = express();

const handleListening = () => console.log(`${PORT}번 포트를 사용하여 서버 가동중..`);

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', globalRouter);
app.use('/post', postRouter);
app.use('/users', userRouter);

app.listen(PORT, handleListening);
