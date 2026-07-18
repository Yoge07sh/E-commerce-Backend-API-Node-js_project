const User = require('../models/User');
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const generateToken = require("../utils/generateToken");
const jwt = require('jsonwebtoken');

//registeratiion page by get
const showRegisterPage = (req, res) => {
    res.render('auth/register');
};
//login page by get
const showLoginPage = (req, res) => {
    res.render('auth/login');
};
//home page by get
const showHomePage = (req, res) => {
    res.render('home')
}

//register user by post
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
        const token = generateToken(user._id);
        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        });

        res.render('home')

    } catch (err) {
        res.status(500).send("internal server error");
    }
}

//login user by post
const loginUser = async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            errors: errors.array()
        })
    }

    try {

        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).send('user with this email not exist');
        }

        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch) {
            return res.status(401).send('invalid password plz enter valid password');
        }

        const token = jwt.sign(
            {
                id: user._id,
                email: user.email,
                role: user.role
            },
            "mysecretKey",
            {
                expiresIn: "10m"
            }
        );
        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 10 * 60 * 1000
        });
        res.redirect('home')

    } catch (err) {
        console.log(err);
    }
}

const logout = (req, res) => {
    res.clearCookie("token");
    res.redirect('login')
}

const showProfile =  (req, res) => {
    res.render('profile', {
        user: req.user
    });
}

module.exports = {
    showRegisterPage,
    showLoginPage,
    showHomePage,
    registerUser,
    loginUser,
    logout,
    showProfile
};