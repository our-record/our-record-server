import User from '../models/User';
import CoupleInfo from '../models/CoupleInfo';

export const getRegistInfo = async (req, res) => {
  const {
    session: { couple_id },
  } = req;

  try {
    const user = await CoupleInfo.findById(couple_id);
    res.status(200).json(user);
  } catch (error) {
    return res.json(error);
  }
};

export const postRegistInfo = async (req, res) => {
  const {
    session: { inviteCode },
    headers: { _id: couple_id },
    body: { dday, invitor_nickname, invitor_birth, invitee_nickname, invitee_birth, couple_img },
  } = req;

  if (!inviteCode) {
    await CoupleInfo.create({
      _id: couple_id,
      dday,
      invitor_nickname,
      invitor_birth,
      couple_img,
    });
  } else {
    await CoupleInfo.findByIdAndUpdate({
      _id: couple_id,
      $set: {
        invitee_nickname,
        invitee_birth,
      },
    });
  }

  return res.json();
};

// Get Method Edit
export const getEdit = async (req, res) => {
  const {
    session: {
      user: { couple_id },
    },
  } = req;
  const userData = await CoupleInfo.findById(couple_id);
  return res.json(userData);
};
// Post Method Edit
export const postEdit = async (req, res) => {
  const {
    session: {
      user: { _id },
    },
    body: { dday, couple_img, invitor_birth, invitee_birth, invitor_nickname, invitee_nickname },
  } = req;

  await CoupleInfo.findByIdAndUpdate(_id, {
    dday,
    couple_img,
    invitor_birth,
    invitor_nickname,
    invitee_birth,
    invitee_nickname,
  });

  return res.sendStatus(200);
};

export const logout = (req, res) => {
  req.session.loggined = false;
  req.session.destroy();
  return res.redirect('http://localhost:3000/register');
};
