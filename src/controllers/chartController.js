import Post from '../models/Post';

// 최근 7일 차트
export const chartHome = async (req, res) => {
  const {
    session: {
      user: { couple_id },
    },
  } = req;

  try {
    const initialPost = await Post.find({
      $and: [
        { writer: couple_id },
        {
          date: {
            $gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
            $lte: new Date(),
          },
        },
      ],
    }).exec((err, result) => {
      console.log(new Date().getDate() - 7);
      return res.json(result);
    });
  } catch (err) {
    return res.json(err);
  }
};

// 월간 차트
export const monthlyData = async (req, res) => {
  const {
    session: {
      user: { couple_id },
    },
    body: { month, year },
  } = req;

  try {
    const selectedDate = new Date(`${year}-${month}`);

    const nextMonth = new Date(
      new Date(new Date(`${year}-${month}`)).setMonth(
        new Date(`${year}-${month}`).getUTCMonth() + 1,
      ),
    );

    const foundYearData = await Post.find({
      $and: [
        { writer: couple_id },
        {
          date: {
            $gte: selectedDate,
            $lt: nextMonth,
          },
        },
      ],
    }).exec((err, result) => {
      console.log(result);
      return res.json(result);
    });
  } catch (err) {
    return res.json(err);
  }
};
