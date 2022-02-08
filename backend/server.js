const express = require("express");
const { connect } = require("mongoose");
const dotenv = require("dotenv").config();
// const colors = require('çolors')
const connectDB = require("./config/db");

connectDB();

const PORT = process.env.PORT || 5000;
const app = express();

app.use("/api/home", require("./routes/attendanceRouter"));

app.listen(PORT, () => console.log(`Server running in port no ${PORT}`));
