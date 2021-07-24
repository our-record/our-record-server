import User from '../models/User';

export const detail = (req, res) => res.send('User Detail');
export const edit = (req, res) => res.send('Edit User');
export const join = (req, res) => res.send('Join');
export const login = (req, res) => res.send('Login');
export const logout = (req, res) => res.send('Logout');

export const register = async (req, res) => {
  const { email } = req.body;
  const foundEmail = await User.exists({ email });
  if (foundEmail) {
    res.status(400).send('이미 존재하는 ID입니다');
  } else {
    await User.create(req.body);
    res.send('회원가입 성공');
  }
};
