const express = require("express");
const router = express.Router();
const {
  getAttendanceRouter,
  setAttendanceRouter,
  putAttendanceRouter,
  deleteAttendanceRouter,
} = require("../controllers/attendanceController");

router.route("/").get(getAttendanceRouter).post(setAttendanceRouter);

router.route("/:id").put(putAttendanceRouter).delete(deleteAttendanceRouter);

module.exports = router;
