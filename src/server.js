import express from 'express';
import morgan from 'morgan';

const PORT = 4000;
const app = express();

const handleListening = () => console.log(`${PORT}번 포트를 사용하여 서버 가동중..`);
const handleHome = (req, res) => res.send('Home');

app.use(morgan('dev'));
app.get('/', handleHome);

app.listen(PORT, handleListening);
