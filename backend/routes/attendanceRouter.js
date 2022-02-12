const express = require("express");
const router = express.Router();
const {
  getAttendanceRouter,
  setAttendanceRouter,
  putAttendanceRouter,
  deleteAttendanceRouter,
} = require("../controllers/attendanceController");

// const { users } = require("../routes/users");

router.route("/").get(getAttendanceRouter).post(setAttendanceRouter);
// router.route("/user").post(users);

router.route("/:id").put(putAttendanceRouter).delete(deleteAttendanceRouter);

module.exports = router;
