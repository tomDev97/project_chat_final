import mongoose from "mongoose";
import bluebird from "bluebird";

/**
 * connect t mongodb 
 */

const connectDb = () => {
  mongoose.Promise = bluebird;


  let uri = `${process.env.DB_CONNECTION}://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
  //mongodb://localhost:27107/chat
  return mongoose.connect(uri, { useMongoClient: true });
}

module.exports =  connectDb;
