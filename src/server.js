import express from 'express';

const app = express();
const PORT = 4000;

app.get('/', (req, res) => res.send('Home'));

const handleListening = () => console.log(`${PORT}번 포트를 사용하여 서버 가동중..`);
app.listen(PORT, handleListening);
