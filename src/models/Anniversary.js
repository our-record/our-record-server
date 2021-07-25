import mongoose from 'mongoose';

const AnniversarySchema = new mongoose.Schema({
  anniversary_info: {
    type: String,
  },
  anniversary_date: {
    type: Date,
  },
});

const anniversaryModel = mongoose.model('anniversary', AnniversarySchema);

export default anniversaryModel;
