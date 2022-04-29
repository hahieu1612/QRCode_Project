const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require ("morgan");
const dotenv = require("dotenv");
const AttendanceRouter = require("./routers/Attendance")

dotenv.config();

mongoose.connect((process.env.MongoDB_URL), () =>{
    console.log("Connect to Mongo");
});

app.use(bodyParser.json({limit: "50mb"}));
app.use(cors());
app.use(morgan("common"));

app.use(AttendanceRouter);


app.listen(6000,() => {
    console.log("server is runing...")
});