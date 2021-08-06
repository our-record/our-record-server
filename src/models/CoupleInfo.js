import mongoose from 'mongoose';

const coupleSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  anniversary_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Anniversary',
  },
  dday: {
    type: Date,
    required: true,
  },
  invitor_nickname: String,
  invitee_nickname: String,
  invitor_birth: Date,
  invitee_birth: Date,
  couple_img: String,
});

const coupleModel = mongoose.model('CoupleInfo', coupleSchema);

export default coupleModel;
