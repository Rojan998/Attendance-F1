const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const SubmitAttendance = require("../Models/SubmitAttendance");
// const User = require("../Models/User");
const jwt = require("jsonwebtoken");

const { check, validationResult } = require("express-validator");

// @route GET api/submitattendance
// @desc Test route
// @access Public
router.get("/", auth, async (req, res) => {
  try {
    const userData = await SubmitAttendance.findById(req.user.id).select(
      "-password"
    );
    res.json(userData);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route POST /submitattendance
// @desc Test Route
// @access Public

const checkValidations = [
  check("username", "Name is required").not().isEmpty(),
  check("password", "Password is required").exists(),
  check("checkin", "Please Choose the CheckIn  Time").exists(),
  check("checkout", "Please Choose the CheckOut  Time").exists(),
];

router.post("/", checkValidations, async (req, res) => {
  //console.log(req.body);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { username, password, checkin, checkout, remarks } = req.body;

  try {
    let user = await SubmitAttendance.findOne({ username });
    // if (user) {
    //   return res
    //     .status(400)
    //     .json({ errors: [{ message: "USer DATA Already Exists" }] });
    // }
    user = new SubmitAttendance({
      username,
      password,
      checkin,
      checkout,
      remarks,
    });
    await user.save();
    // res.status(200).json(user);

    const payload = {
      user: {
        id: user.id,
        username: user.username,
      },
    };
    jwt.sign(
      payload,
      process.env.jwtSecret,
      { expiresIn: 36000000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
