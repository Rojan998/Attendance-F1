const mongoose = require("mongoose");

const SubmitAttendanceSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
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

  checkin: {
    type: String,
    default: false,
  },

  checkout: {
    type: String,
    default: false,
  },
  remarks: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = SubmitAttendance = mongoose.model(
  "submitAttendance",
  SubmitAttendanceSchema
);
