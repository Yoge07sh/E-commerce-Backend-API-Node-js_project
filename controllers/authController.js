const User = require('../models/User');
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const generateToken = require("../utils/generateToken");


const showRegisterPage = async (req, res) => {
    res.render('auth/register');
};
const showLoginPage = (req, res) => {
    res.render("auth/login");
};
const registerUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            errors: errors.array()
        })
    }
    const email = req.body.email.toLowerCase();
    req.body.email = email;
    try {
        const existinguser = await User.findOne({ email: req.body.email });
        if (existinguser) {
            return res.send("email is already registered");
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const userData = {
            ...req.body,
            password: hashedPassword
        }
        const user = new User(userData);
        console.log(req.body);
        await user.save();
        const token = generateToken(user_.id);
        res.cokkie("token", token,{
            httpOnly: true,
            maxAge: 24*60*60*1000
        });
        res.render('home')
    } catch (err) {
        res.status(500).send("internal server error");
    }
}
module.exports = {
    showRegisterPage,
    showLoginPage,
    registerUser
};