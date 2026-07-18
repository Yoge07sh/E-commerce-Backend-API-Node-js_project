const express = require('express');
const path = require("path");
const app = express();
const cookieParser = require("cookie-parser");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

const authRoute = require('./routes/authRoute');
app.use('/', authRoute);



module.exports = app;