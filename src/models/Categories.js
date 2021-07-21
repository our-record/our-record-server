import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'post',
    required: true,
  },
  name: {
    type: String,
  },
});

const categoryModel = mongoose.model('category', categorySchema);

export default categoryModel;
