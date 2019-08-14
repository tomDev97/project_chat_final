import mongoose from "mongoose";

let Schema = mongoose.Schema;

let ChatGroupSchema = new Schema({
  name: String,
  userAmount: { type: Number, min: 3, max: 100 },
  messageAmount: { type: Number, default: 0 },
  userId : String,
  members : [
    {userId : String}
  ],
  createAt: { type: Number, default: Date.now },
  UpdateAt: { type: Number, default: null },
  DeleteAt: { type: Number, default: null },

});

module.exports = mongoose.model('chat-group', ChatGroupSchema);