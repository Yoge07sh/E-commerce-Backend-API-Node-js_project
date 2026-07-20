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
const adminRoute = require('./routes/adminRoute');
const categoryRoute = require('./routes/categoryRoute');
const productRoute = require('./routes/productRoute');
const cartRoute = require("./routes/cartRoute");
app.use(authRoute);
app.use('/admin', adminRoute);
app.use(categoryRoute);
app.use('/admin', categoryRoute);
app.use(productRoute);
app.use('/admin',productRoute);
app.use(userRoute);
app.use("/user", cartRoute);




module.exports = app;