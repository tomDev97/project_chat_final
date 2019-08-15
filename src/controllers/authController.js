import { validationResult } from 'express-validator/check';
import { auth } from './../services/index';

let getLoginRegister = (req, res) => {
  return res.render('auth/master', {
    errors: req.flash("errors"),
    success: req.flash("success"),

  });
};

let postRegister = async (req, res) => {
  let errorArr = [];
  let { email, gender, password, password_confimation } = req.body;
  let validatorErrors = validationResult(req);
  if (!validatorErrors.isEmpty()) {
    let errors = Object.values(validatorErrors.mapped());
    errors.forEach(item => {
      errorArr.push(item.msg);
    });
    req.flash("errors", errorArr);
    return res.redirect("/login-register")
  }
  console.log(req.body);
  try {
    await auth.register(email, gender, password);
  } catch (error) {
    req.flash("errors", error);
    return res.redirect("/login-register")
  }

}


module.exports = {
  getLoginRegister,
  postRegister
};
