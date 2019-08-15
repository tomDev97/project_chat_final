// const express = require("express");
import express from "express";
import ConnectDb from "./config/connectToDb";

import bodyParser from 'body-parser';
// import ContacModel from './models/contact.model'
import configVieEngine from './config/viewEngine'
//import api
import initAllRoutes from './routers/api';
//import connect  flash msg 
import flash from 'connect-flash';

import configSession  from './config/session'; 

const app = express();

//connect to mongodb
ConnectDb();

//config session 
configSession(app);

//config view engine
configVieEngine(app);

//middle ware : Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//middle ware : connect flash message
app.use(flash());

//use route api 
initAllRoutes(app);

// app.get('/test', async (req, res) => {
//   try {
//     let item = {
//       userId: 'asdadsad',
//       contactId: 'ddfsff'
//     };
//     let contact = await ContacModel.createNew(item);
//     res.send(contact);
//   } catch (error) {
//     console.log(error);
//   }
// });


app.listen(process.env.APP_PORT, process.env.APP_HOST, () => {
  console.log(`starting with ${process.env.APP_HOST}:${process.env.APP_PORT}`);
})
