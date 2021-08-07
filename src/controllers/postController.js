import Post from '../models/Post';

export const writePost = async (req, res) => {
  try {
    const {
      body: {
        date,
        story,
        place,
        category,
        expense,
        expenseInfo,
        time,
        longitude,
        latitude,
        // datePhoto,
      },
      session: {
        user: { couple_id },
      },
    } = req;

    console.log(req.body);

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
      // datePhoto,
      writer: couple_id,
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
    query: { date },
  } = req;

  try {
    await Post.find({ $and: [{ date: `/^${date}` }, { writer: couple_id }] }).then((data) => {
      return res.json(data);
    });
  } catch (error) {
    console.log(error);
    return res.send('Error');
  }
};

export const editPost = async (req, res) => {
  try {
    const {
      body: { idx: _id, time, category, expenseInfo, expense, story },
    } = req;

    await Post.findByIdAndUpdate(
      _id,
      { $set: { time, category, expenseInfo, expense, story } },
      { new: true },
    );
    console.log('edited');
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
      body: { idx: _id, date },
    } = req;

    await Post.remove({ $and: [{ _id }, { date: `/^${date}/` }, { writer: couple_id }] });
    return res.status(200);
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
      body: { date },
    } = req;

    await Post.remove({ $and: [{ date: `/^${date}/` }, { writer: couple_id }] });
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
      body: { _id, date },
    } = req;
    await Post.find({ $and: [{ _id }, { date: `/^${date}/` }, { writer: couple_id }] }).then(
      (data) => {
        const storyObj = {
          story: data[0].story,
          photo_img: data[0].datePhoto,
        };
        return res.json(storyObj);
      },
    );
  } catch (error) {
    console.log(error);
    return res.send('Error');
  }
};
