import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  nickname: {
    type: String,
    required: true,
  },
  couple_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CoupleInfo',
    required: true,
  },
});

const userModel = mongoose.model('User', userSchema);

export default userModel;
