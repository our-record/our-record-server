import mongoose from 'mongoose';

const AnniversarySchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  writer: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});

const anniversaryModel = mongoose.model('anniversary', AnniversarySchema);

export default anniversaryModel;
