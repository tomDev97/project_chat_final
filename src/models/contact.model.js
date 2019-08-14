import mongoose from "mongoose";

let Schema = mongoose.Schema;

let ContactSchema = new Schema({
  userId : String,
  contactId : String,
  status : Boolean,
  createAt: { type: Number, default: Date.now },
  UpdateAt: { type: Number, default: null },
  DeleteAt: { type: Number, default: null },

});

module.exports = mongoose.model('contact', ContactSchema);