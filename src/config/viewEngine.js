import express from 'express'
import ExpressEjsExtend from 'express-ejs-extend';

let configVieEngine =  (app) => {
  app.use(express.static('./src/public'));
  app.engine('ejs', ExpressEjsExtend);
  app.set('view engine', 'ejs');
  app.set('views', './src/views')
}

module.exports = configVieEngine;