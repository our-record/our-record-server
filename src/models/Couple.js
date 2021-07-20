import mongoose from 'mongoose';

const coupleSchema = new mongoose.Schema({
  f_email: {
    type: String,
  },
  m_email: {
    type: String,
  },
});

const coupleModel = mongoose.model('Couple', coupleSchema);

export default coupleModel;
