const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const SubmitAttendance = require("../Models/SubmitAttendance");
const User = require("../Models/User");

// @route    DELETE api/update/:id
// @desc     DELETE the user in the database
// @access   Private
router.delete("/", auth, async (req, res) => {
  try {
    const editUserProfileData = await SubmitAttendance.findOneAndDelete({
      username: req.user.username,
    });

    const userDatabse = await User.findOneAndDelete({
      username: req.user.username,
    });

    if (!editUserProfileData && !userDatabse) {
      return res
        .status(400)
        .json({ msg: "There is no User data for this user" });
    }
    res.json("User was deleted Successfully");
  } catch (err) {
    console.error(err.message);

    res.status(500).send("Server Error");
  }
});

module.exports = router;
