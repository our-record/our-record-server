import Post from '../models/Post';

export const writePost = async (req, res) => {
  try {
    const {
      date,
      story,
      place,
      category,
      expense,
      expenseInfo,
      time,
      longitude,
      latitude,
      datePhoto,
    } = req.body;

    await Post.create({
      date,
      story,
      place,
      category,
      expense,
      expenseInfo,
      time,
      longitude,
      latitude,
      datePhoto,
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(404);
  }
};

export const postList = async (req, res) => {
  const { date } = req.query;
  try {
    await Post.find({ date }).then((data) => {
      res.json(data);
    });
  } catch (error) {
    console.log(error);
    res.send('Error');
  }
};

export const editPost = async (req, res) => {
  try {
    const { _id } = req.params;
    await Post.findByIdAndUpdate(_id, { $set: req.body }, { new: true }, function (err, result) {
      console.log(`${_id}의 데이터 수정 완료`);
      res.send('Done');
    });
  } catch (error) {
    console.log(error);
    res.send('Edit Failed');
  }
};

export const removePost = async (req, res) => {
  try {
    const { _id } = req.body;
    await Post.findOneAndRemove({ _id }).then((data) => {
      console.log('Post Removed');
      res.sendStatus(200);
    });
  } catch (error) {
    console.log(error);
    res.send('Error');
  }
};

export const storyDetail = async (req, res) => {
  try {
    const { _id } = req.body;
    await Post.find({ _id }).then((data) => {
      const storyObj = {
        story: data[0].story,
        photo_img: data[0].datePhoto,
      };
      res.json(storyObj);
    });
  } catch (error) {
    console.log(error);
    res.send('Error');
  }
};
