// @desc GET attendance
// @routes GET /api/home
// @access Private
const getAttendanceRouter = (req, res) => {
  res.status(200).json({ message: `GET root home node` });
};

// @desc POST attendance
// @routes POST /api/home
// @access Private
const setAttendanceRouter = (req, res) => {
  res.status(200).json({ message: "POST ROOT HOME NODE" });
};

// @desc Update attendance
// @routes Upadate /api/home
// @access Private
const putAttendanceRouter = (req, res) => {
  res
    .status(200)
    .json({ message: `Update ROOT HOME NODE id: ${req.params.id} ` });
};

// @desc Delete attendance
// @routes Delete /api/home
// @access Private
const deleteAttendanceRouter = (req, res) => {
  res
    .status(200)
    .json({ message: `Delete ROOT HOME NODE id: ${req.params.id} ` });
};

module.exports = {
  getAttendanceRouter,
  setAttendanceRouter,
  putAttendanceRouter,
  deleteAttendanceRouter,
};
