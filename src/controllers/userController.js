import User from '../models/User';
import CoupleInfo from '../models/CoupleInfo';

export const detail = (req, res) => res.send('User Detail');

// Get Method Edit
export const getEdit = (req, res) => res.json(req.session.user);
// Post Method Edit
export const postEdit = async (req, res) => {
  const {
    session: {
      user: { _id },
    },
    body: { dday, couple_img, f_birth, m_birth, f_nickname, m_nickname },
  } = req;

  await CoupleInfo.findByIdAndUpdate(_id, {
    dday,
    couple_img,
    f_birth,
    m_birth,
    f_nickname,
    m_nickname,
  });

  return res.sendStatus(200);
};

export const join = (req, res) => res.send('Join');

export const login = (req, res) => {
  req.session.loggined = true;
  // req.session.user = user;
  res.send('Login');
};

export const logout = (req, res) => {
  req.session.destory();
  return res.redirect('/');
};

export const register = async (req, res) => {
  const { email } = req.body;
  const foundEmail = await User.exists({ email });
  if (foundEmail) {
    res.status(400).send('이미 존재하는 ID입니다');
  } else {
    await User.create(req.body);
    res.send('회원가입 성공');
  }
};
