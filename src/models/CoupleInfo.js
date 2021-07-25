import mongoose from 'mongoose';

const coupleInfoSchema = new mongoose.Schema({
  dday: {
    type: Date,
    required: true,
  },
  f_birth: Date,
  m_birth: Date,
  couple_img: String,
  f_nickname: String,
  m_nickname: String,
});

const coupleInfoModel = mongoose.model('coupleInfo', coupleInfoSchema);

export default coupleInfoModel;
