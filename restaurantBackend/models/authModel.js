const mongoose = require("mongoose");
const schema = mongoose.Schema();

const authSchema = new schema({
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

exports.model = new mongoose.model('authModel', authSchema);

