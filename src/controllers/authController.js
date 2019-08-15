import { validationResult } from 'express-validator/check';

let getLoginRegister = (req, res) => {
  return res.render('auth/master');
};

let postRegister = (req, res) => {
  let errorArr = [];

  let validatorErrors = validationResult(req);
  if(!validatorErrors.isEmpty()) {
    let errors = Object.values(validatorErrors.mapped());

    errors.forEach(item => {
      errorArr.push(item.msg);
    });
    console.log(errorArr);
    return;
  }
  console.log(req.body);
  
}


module.exports = {
  getLoginRegister,
  postRegister
};
