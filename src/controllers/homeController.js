import coupleInfo from '../models/CoupleInfo';
import post from '../models/Post';

export const home = async (req, res) => {
  const { couple_id } = req.session.user;
  const { convertedDate } = req.body;
  let result = [];

  try {
    await post
      .find({ $and: [{ writer: couple_id }, { date: convertedDate.toString().slice(0, 10) }] })
      .sort('time')
      .exec((err, doc) => {
        doc.length !== 0 ? (result[0] = doc) : (result[0] = '');
      });
    await coupleInfo.findById(couple_id, (err, doc) => {
      result[1] = doc;
    });
    return res.json(result);
  } catch (error) {
    console.log('ERROR');
    res.json(error);
  }
};
