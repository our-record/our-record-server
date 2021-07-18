import express from 'express';

const PORT = 4000;
const app = express();

const handleListening = () => console.log(`${PORT}번 포트를 사용하여 서버 가동중..`);

app.get('/', (req, res) => res.send('Home'));
app.listen(PORT, handleListening);
