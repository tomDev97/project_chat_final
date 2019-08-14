import express from 'express';
//import controller form index in folder controllers
import { home, auth } from './../controllers/index';


const router = express.Router();

/**
 * init routers
 * param app from express
 */

const initAllRoutes = (app) => {
  router.get('/', home.getHome);

  router.get('/login-register', auth.getLoginRegister);

  return app.use('/', router);
}


module.exports = initAllRoutes;

