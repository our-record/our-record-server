import 'dotenv/config';
import './db';
import './models/Anniversary';
import './models/Categories';
import './models/CoupleInfo';
import './models/Post';
import './models/User';
import app from './server';

const PORT = 4000;

const handleListening = () => console.log(`${PORT}번 포트를 사용하여 서버 가동중..`);

app.listen(PORT, handleListening);
