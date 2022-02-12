const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    sparse: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date().toString(),
  },
});

module.exports = User = mongoose.model("user", UserSchema);
