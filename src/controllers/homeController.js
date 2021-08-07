import coupleInfo from '../models/CoupleInfo';
import post from '../models/Post';

export const home = async (req, res) => {
  const { couple_id } = req.session.user;
  const { convertedDate: date } = req.body;
  let result = [];

  try {
    await post.find({ writer: couple_id }, (err, doc) => {
      const foundPost = {};
      doc.length !== 0 ? (foundPost['post'] = doc) : (foundPost['post'] = '');
      result.push(foundPost);
    });
    await coupleInfo.findById(couple_id, (err, doc) => {
      const coupleData = {
        user: doc,
      };
      result.push(coupleData);
    });
    return res.json(result);
  } catch (error) {
    console.log('ERROR');
    res.json(error);
  }
};
