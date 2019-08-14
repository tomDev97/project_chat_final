// const express = require("express");
import express from "express";
import ConnectDb from "./config/connectToDb";
// import ContacModel from './models/contact.model'
import configVieEngine from './config/viewEngine'
//import api
import initAllRoutes from './routers/api';

const app = express();

//connect to mongodb
ConnectDb();

//config view engine
configVieEngine(app);

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
