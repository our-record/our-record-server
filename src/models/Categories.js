import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
  },
  name: {
    type: String,
  },
});

const categoryModel = mongoose.model('categories', categorySchema);

export default categoryModel;
