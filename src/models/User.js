import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  nickname: {
    type: String,
    required: true,
    unique: true,
  },
  couple_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CoupleDB',
  },
  socialOnly: {
    type: Boolean,
    default: false,
  },
  token: {
    type: String,
  },
});

const userModel = mongoose.model('User', userSchema);

export default userModel;
