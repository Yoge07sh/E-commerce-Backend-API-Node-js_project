const express = require('express');
const route = express.Router();
const authController = require('../controllers/authController')
route.get("/register", (req, res) => {
    authController.showRegisterPage(req, res)
});

route.get("/login", (req, res) => {
    authController.showLoginPage(req, res)

});

module.exports = route;