import mongoose from 'mongoose';

const coupleSchema = new mongoose.Schema({
  f_email: {
    type: String,
  },
  m_email: {
    type: String,
  },
  anniversary_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Anniversary',
  },
  dday: {
    type: Date,
    required: true,
  },
  f_birth: Date,
  m_birth: Date,
  couple_img: String,
});

const coupleModel = mongoose.model('CoupleDB', coupleSchema);

export default coupleModel;
