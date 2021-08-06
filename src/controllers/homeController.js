import coupleInfo from '../models/CoupleInfo';
import post from '../models/Post';

export const home = async (req, res) => {
  const { couple_id } = req.session.user;
  const { convertedDate: date } = req.body;
  let result = {};

  console.log(req.body);
  console.log(couple_id);

  try {
    await post.find({ $and: [{ writer: couple_id }, { date }] }, (err, doc) => {
      result['post'] = doc;
    });
    await coupleInfo.findById(couple_id, (err, doc) => {
      result['user'] = doc;
    });
    return res.json(result);
  } catch (error) {
    console.log('ERROR');
    res.json(error);
  }
};
