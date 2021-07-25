import mongoose from 'mongoose';

const coupleSchema = new mongoose.Schema({
  f_email: {
    type: String,
  },
  m_email: {
    type: String,
  },
  coupleInfo_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CoupleInfo',
  },
  anniversary_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Anniversary',
  },
});

const coupleModel = mongoose.model('CoupleDB', coupleSchema);

export default coupleModel;
