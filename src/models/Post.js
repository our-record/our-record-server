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
    type: String,
    required: true,
  },
  expense: {
    type: Number,
    required: true,
  },
  expenseInfo: {
    type: Number,
    required: true,
  },
  time: {
    type: Date,
    required: true,
  },
  longitude: Number,
  latitude: Number,
  date_photo: String,
});

const postModel = mongoose.model('Post', postSchema);

export default postModel;
