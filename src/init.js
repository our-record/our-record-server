import './db';
import './models/Post';
import app from './server';

const PORT = 4000;

const handleListening = () => console.log(`${PORT}번 포트를 사용하여 서버 가동중..`);

app.listen(PORT, handleListening);
