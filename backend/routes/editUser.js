const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const SubmitAttendance = require("../Models/SubmitAttendance");

const { check, validationResult } = require("express-validator");

// @route    GET api/update
// @desc     Get current users profile
// @access   Private
router.get("/", auth, async (req, res) => {
  try {
    const editUserProfileData = await SubmitAttendance.findOne({
      username: req.user.username,
    }).populate();

    if (!editUserProfileData) {
      return res
        .status(400)
        .json({ msg: "There is no editUserProfileData for this user" });
    }
    res.json(editUserProfileData);
  } catch (err) {
    console.error(err.message);

    res.status(500).send("Server Error");
  }
});

// @route    POST api/update
// @desc     POST the updated value in the database
// @access   Private

router.post("/", auth, async (req, res) => {
  try {
    // console.log("Im in the post update route");
    res.status(200).json({ msg: "Im in the post update route" });

    // const editUserProfileData = await SubmitAttendance.findOne({
    //   username: req.user.username,
    // }).populate();
    // if (!editUserProfileData) {
    //   return res
    //     .status(400)
    //     .json({ msg: "There is no editUserProfileData for this user" });
    // }
    // res.json(editUserProfileData);
  } catch (err) {
    // console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
