import User from '../models/User';
import CoupleInfo from '../models/CoupleInfo';

export const registInfo = async (req, res) => {
  console.log(req);

  res.json(req.body);
};

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

export const logout = (req, res) => {
  req.session.loggined = false;
  req.session.destroy();
  return res.redirect('/');
};
