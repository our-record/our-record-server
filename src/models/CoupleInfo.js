import mongoose from 'mongoose';

const coupleSchema = new mongoose.Schema({
  anniversary_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Anniversary',
  },
  dday: {
    type: Date,
    required: true,
  },
  first_user_birth: Date,
  invite_user_birth: Date,
  couple_img: String,
});

const coupleModel = mongoose.model('CoupleInfo', coupleSchema);

export default coupleModel;
