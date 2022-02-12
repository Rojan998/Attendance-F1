// This is Register page in the Frontend Logic

const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const { check, validationResult } = require("express-validator");

const User = require("../Models/User");

// @route POST api/users
// @desc Register User
// @access Public

const checkValidations = [
  check("username", "Name is required").not().isEmpty(),
  check(
    "password",
    "Please enter password with 6 or more characters "
  ).isLength({ min: 6 }),
];

router.post("/", checkValidations, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { username, password } = req.body;

  try {
    let user = await User.findOne({ username });
    if (user) {
      return res
        .status(400)
        .json({ errors: [{ message: "USer Already Exists" }] });
    }
    user = new User({
      username,
      password,
    });
    await user.save();

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

// @route GET api/users
// @desc Show Register User
// @access Public
router.get("/", (req, res) => {
  res.send("This is the GET Request for API/USERS");
});
module.exports = router;
