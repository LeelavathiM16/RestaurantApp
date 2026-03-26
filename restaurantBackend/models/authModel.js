const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const authSchema = new Schema({
  username: {
    required: true,
    type: String,
    unique: true,
  },
  email: {
    required: true,
    type: String,
    unique: true,
  },
  password: {
    required: true,
    type: String,
    unique: true,
  },
  role:{
    type:String,
    default:'user'
  }
});

module.exports = new mongoose.model('User', authSchema);

