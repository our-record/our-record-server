import Post from '../models/Post';

export const writePost = async (req, res) => {
  try {
    const {
      body: { date, story, place, category, expense, expenseInfo, time, longitude, latitude },
      session: {
        user: { couple_id },
      },
      file,
    } = req;

    await Post.create({
      date: new Date(date),
      story,
      place,
      category,
      expense,
      expenseInfo,
      time,
      longitude,
      latitude,
      writer: couple_id,
      datePhoto: file ? `http://localhost:4000/images/${file.filename}` : '',
    });
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.sendStatus(404);
  }
};

export const postList = async (req, res) => {
  const {
    session: {
      user: { couple_id },
    },
    body: { convertedDate },
  } = req;

  try {
    await Post.find({ $and: [{ date: convertedDate }, { writer: couple_id }] })
      .sort('time')
      .exec((err, doc) => {
        return res.json(doc);
      });
  } catch (error) {
    return res.json(error);
  }
};

export const editPost = async (req, res) => {
  try {
    const {
      body: { _id, time, category, expenseInfo, expense, story },
      file,
    } = req;

    await Post.findByIdAndUpdate(_id, {
      $set: {
        time,
        category,
        expenseInfo,
        expense,
        story,
        if(file) {
          datePhoto: `http://localhost:4000/images/${file.filename}`;
        },
      },
    });
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.send('Edit Failed');
  }
};

export const removePost = async (req, res) => {
  try {
    const {
      session: {
        user: { couple_id },
      },
      body: { id: _id },
    } = req;

    await Post.deleteOne({ $and: [{ _id }, { writer: couple_id }] });
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.send('Error');
  }
};

export const removePostAll = async (req, res) => {
  try {
    const {
      session: {
        user: { couple_id },
      },
      body: { convertedDate },
    } = req;

    await Post.deleteMany({ $and: [{ writer: couple_id }, { date: convertedDate }] });
    return res.status(200);
  } catch (error) {
    console.log(error);
    return res.send('Error');
  }
};

export const storyDetail = async (req, res) => {
  try {
    const {
      session: {
        user: { couple_id },
      },
      body: { _id, convertedDate },
    } = req;
    await Post.find({
      $and: [{ _id }, { date: convertedDate }, { writer: couple_id }],
    }).then((data) => {
      const storyObj = {
        story: data[0].story,
        photo_img: data[0].datePhoto,
      };
      return res.json(storyObj);
    });
  } catch (error) {
    console.log(error);
    return res.send('Error');
  }
};
