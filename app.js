const express = require('express');
const path = require("path");
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
const authRoute = require('./routes/authRoute');
app.use('/', authRoute);
app.get('/', (req, res) => {
    res.render('home');
})

module.exports = app;