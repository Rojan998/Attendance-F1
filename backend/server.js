const express = require("express");

const { connect } = require("mongoose");
const dotenv = require("dotenv").config();
// const colors = require('çolors')
const connectDB = require("./config/db");

connectDB();

// Init Middleware
const app = express();
app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000;

// app.use("/api/users", require("./routes/register"));
app.use("/api/auth", require("./routes/login"));
app.use("/api/dashboard", require("./routes/dashboard"));
app.use("/api/submitattendance", require("./routes/submitAttendance"));
app.use("/api/update", require("./routes/editUser"));
app.use("/api/delete", require("./routes/deleteUser"));

app.listen(PORT, () => console.log(`Server running in port no ${PORT}`));
