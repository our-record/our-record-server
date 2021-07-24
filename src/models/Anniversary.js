import mongoose from 'mongoose';

const AnniversarySchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'coupleDB',
  },
  anniversary_info: {
    type: String,
  },
  anniversary_date: {
    type: Date,
  },
});
