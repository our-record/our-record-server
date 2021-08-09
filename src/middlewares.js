export const localsMiddleware = (req, res, next) => {
  console.log(req.session);
  next();
};

export const protectMiddleware = (req, res, next) => {
  if (req.session.loggedIn) {
    return next();
  } else {
    return res.redirect('http://localhost:3000/register');
  }
};

export const publicOnlyMiddleware = (req, res, next) => {
  if (!req.session.loggedIn) {
    return next();
  } else {
    return res.redirect('http://localhost:3000/register');
  }
};
