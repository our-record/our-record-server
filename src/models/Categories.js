import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
    required: true,
  },
  name: {
    type: String,
  },
});

const categoryModel = mongoose.model('Category', categorySchema);

export default categoryModel;
