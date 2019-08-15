import UserModel from '../models/userModel';
import bcrypt from 'bcrypt';
import uuidv4 from 'uuid/v4';
import { transErorrs } from './../../lang/vi';

let saltRound = 6;

let register = async (email, gender, password) => {
  return new Promise( async (resolve, reject) => {
    let salt = bcrypt.genSaltSync(saltRound);
    let USerByEmail = await UserModel.findByEmail(email);
    if (USerByEmail) {
      return reject(transErorrs.account_in_use);
    }
    let userItem = {
      email: email.split('@')[0],
      gender,
      local: {
        email,
        password: bcrypt.hashSync(password, salt),
        verifyToken: uuidv4()
      }
    }
    let userNew = await UserModel.create(userItem);
    resolve(userNew);
  });
};

module.exports = {
  register
};