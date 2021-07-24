import mongoose from 'mongoose';

const coupleInfoSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'coupleDB',
  },
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

const coupleInfoModel = mongoose.model('coupleInfo', coupleInfoSchema);

export default coupleInfoModel;
