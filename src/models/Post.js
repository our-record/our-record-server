import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  story: {
    type: String,
    required: true,
  },
  place: String,
  category: {
    type: Number,
    required: true,
    ref: 'Category',
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
    type: Date,
    required: true,
  },
  longitude: Number,
  latitude: Number,
  datePhoto: String,
  writer: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
});

const postModel = mongoose.model('Post', postSchema);

export default postModel;
