import User from '../models/User';
import CoupleInfo from '../models/CoupleInfo';

export const getRegistInfo = async (req, res) => {
  const {
    session: {
      user: { couple_id },
    },
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
    body: { dday, invitor_nickname, invitor_birth, invitee_nickname, invitee_birth },
    file,
  } = req;

  if (!inviteCode) {
    await CoupleInfo.create({
      _id: couple_id,
      dday,
      invitor_nickname,
      invitor_birth,
      couple_img: `http://localhost:4000/images/${file.filename}`,
    });
    return res.json({
      success: true,
      url: `/images/${file.filename}`,
      fileName: res.req.file.filename,
    });
  } else {
    await CoupleInfo.findByIdAndUpdate(inviteCode, {
      $set: {
        invitee_nickname,
        invitee_birth,
      },
    });
  }
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
  try {
    const {
      session: {
        user: { couple_id },
      },
      body: { dday, invitor_birth, invitee_birth, invitor_nickname, invitee_nickname },
      file,
    } = req;

    await CoupleInfo.findByIdAndUpdate(couple_id, {
      $set: {
        dday,
        invitor_birth,
        invitor_nickname,
        invitee_birth,
        invitee_nickname,
        if(file) {
          couple_img: `http://localhost:4000/images/${req.file.filename}`;
        },
      },
    });
    return res.json({
      success: true,
      url: `/images/${req.file.filename}`,
      fileName: res.req.file.filename,
    });
  } catch (err) {
    return res.json(err);
  }
};

export const logout = (req, res) => {
  req.session.loggined = false;
  req.session.destroy();
  return res.redirect('http://localhost:3000/register');
};
