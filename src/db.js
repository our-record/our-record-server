import mongoose from 'mongoose';

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

// 커넥션 관련 변수 선언
const handleOpen = () => console.log('Connected to DB');
const handleError = (error) => console.log('DB Error', error);

// 에러 발생시 로그 생성
mongoose.connection.on('error', handleError);
mongoose.connection.once('open', handleOpen);
