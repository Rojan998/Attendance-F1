const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const SubmitAttendance = require("../Models/SubmitAttendance");

const { check, validationResult } = require("express-validator");

// @route    GET api/dashboard/
// @desc     Get current users profile
// @access   Private
router.get("/", auth, async (req, res) => {
  try {
    const profile = await SubmitAttendance.findOne({
      username: req.user.username,
    }).populate();

    if (!profile) {
      return res.status(400).json({ msg: "There is no profile for this user" });
    }
    res.json(profile);
  } catch (err) {
    console.error(err.message);

    res.status(500).send("Server Error");
  }
});

module.exports = router;
