import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  story: String,
  place: String,
  category: {
    type: Number,
    required: true,
    ref: 'categories',
  },
  expense: {
    type: Number,
    required: true,
  },
  expenseInfo: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  longitude: String,
  latitude: String,
  datePhoto: String,
  writer: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
});

const postModel = mongoose.model('Post', postSchema);

export default postModel;
