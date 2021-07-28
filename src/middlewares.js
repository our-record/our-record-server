export const localsMiddleware = (req, res, next) => {
  console.log(req.session);
  next();
};

export const protectMiddleware = (req, res, next) => {
  if (req.session.loggined) {
    return next();
  } else {
    return res.redirect('/');
  }
};

export const publicOnlyMiddleware = (req, res, next) => {
  if (!req.session.loggined) {
    return next();
  } else {
    // Redirect To Edit Profile
    // return res.redirect("/user")
  }
};
