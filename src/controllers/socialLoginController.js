import axios from 'axios';
import fetch from 'node-fetch';
import QueryString from 'qs';
import User from '../models/User';

export const startGithubLogin = (req, res) => {
  const baseUrl = 'https://github.com/login/oauth/authorize';
  const config = {
    client_id: process.env.GITHUB_CLIENT,
    allow_signup: false,
    scope: 'read:user user:email',
  };
  const params = new URLSearchParams(config).toString();
  const finalUrl = `${baseUrl}?${params}`;
  return res.redirect(finalUrl);
};

export const finishGithubLogin = async (req, res) => {
  const baseUrl = 'https://github.com/login/oauth/access_token';
  const config = {
    client_id: process.env.GITHUB_CLIENT,
    client_secret: process.env.GITHUB_SECRET,
    code: req.query.code,
  };
  const params = new URLSearchParams(config).toString();
  const finalUrl = `${baseUrl}?${params}`;
  const tokenRequest = await (
    await fetch(finalUrl, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
    })
  ).json();

  if ('access token' in tokenRequest) {
    const { access_token } = tokenRequest;
    const apiUrl = 'https://api.github.com/';
    const userData = await (
      await fetch(`${apiUrl}/user`, {
        headers: {
          Authorization: `token ${access_token}`,
        },
      })
    ).json();
    const emailData = await (
      await fetch(`${apiUrl}/user/emails`, {
        headers: {
          Authorization: `token ${access_token}`,
        },
      })
    ).json();
    const emailObj = emailData.find((email) => email.primary === true && email.verified === true);
    if (!emailObj) {
      return res.redirect('/login');
    }
    let user = await User.findOne({ email: emailObj.email });
    if (!user) {
      user = await User.create({
        email: emailObj.email,
        nickname: userData.name,
        socialOnly: true,
      });
    } else {
      req.session.loggedIn = true;
      req.session.user = user;
      return res.redirect('/');
    }
  } else {
    return res.redirect('/login');
  }
};

export const startKakaoLogin = (req, res) => {
  const kakaoAuthURL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.KAKAO_REST_API}&redirect_uri=http://10.58.6.150:4000/kakao/callback&response_type=code&scope=account_email`;
  res.redirect(kakaoAuthURL);
};

export const finishKakaoLogin = async (req, res) => {
  let token;

  try {
    token = await axios({
      method: 'POST',
      url: 'https://kauth.kakao.com/oauth/token',
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
      data: QueryString.stringify({
        grant_type: 'authorization_code',
        client_id: process.env.KAKAO_REST_API,
        redirect_uri: 'http://10.58.6.150:4000/kakao/callback',
        code: req.query.code,
      }),
    });
  } catch (error) {
    res.json(error.data);
  }

  let user;

  try {
    user = await axios({
      method: 'get',
      url: 'https://kapi.kakao.com/v2/user/me',
      headers: {
        Authorization: `Bearer ${token.data.access_token}`,
      },
    });
  } catch (error) {
    res.json(error.data);
  }

  req.session.user = user.data;
  res.status(200).redirect('http://localhost:3000/information');
};
