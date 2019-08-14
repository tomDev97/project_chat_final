import mongoose from "mongoose";

let Schema = mongoose.Schema;

let MessageSchema = new Schema({
  sender: {
    id: String,
    username: String,
    avatar: String
  },
  receiver: {
    id: String,
    username: String,
    avatar: String
  },
  text: String,
  file: { date: Buffer, contentType: String, fileName: String },
  createAt: { type: Number, default: Date.now },
  UpdateAt: { type: Number, default: null },
  DeleteAt: { type: Number, default: null },

});

module.exports = mongoose.model('message', MessageSchema);