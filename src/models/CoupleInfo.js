import mongoose from 'mongoose';

const coupleInfoSchema = new mongoose.Schema({
  dday: {
    type: Date,
    required: true,
  },
  f_birth: {
    type: Date,
    required: true,
  },
  m_birth: {
    type: Date,
    required: true,
  },
  couple_img: String,
});

const coupleInfoModel = mongoose.model('CoupleInfoModel', coupleInfoSchema);

export default coupleInfoModel;
