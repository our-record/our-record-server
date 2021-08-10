import anniversary from '../models/Anniversary';

export const anniversaryHome = async (req, res) => {
  const {
    session: {
      user: { couple_id },
    },
  } = req;

  try {
    await anniversary
      .find({ writer: couple_id })
      .sort('date')
      .exec((err, doc) => {
        res.json(doc);
      });
  } catch (error) {
    return res.status(404).json(error);
  }
};

export const writeAnniversary = async (req, res) => {
  const {
    session: {
      user: { couple_id },
    },
    body: { eventName, date },
  } = req;

  try {
    await anniversary.create({
      eventName,
      date: new Date(date),
      writer: couple_id,
    });
    return res.sendStatus(200);
  } catch (error) {
    return res.json(error);
  }
};

export const removeAnniversary = async (req, res) => {
  const {
    body: { _id },
  } = req;

  try {
    await anniversary.findByIdAndRemove(_id);
    res.sendStatus(200);
  } catch (error) {
    return res.json(error);
  }
};

export const editAnniversary = async (req, res) => {
  const {
    body: { _id, eventName, date },
  } = req;

  try {
    await anniversary.findByIdAndUpdate(_id, { $set: { eventName, date: new Date(date) } });
    return res.sendStatus(200);
  } catch (error) {
    return res.json(error);
  }
};
