const express = require('express');
const route = express.Router();
const authController = require('../controllers/authController')
const authMiddleware = require('../middleware/authMiddleware');
const { registerValidation, loginValidation } = require('../validators/authValidator');
route.get('/home', authMiddleware, (req, res) => {
    authController.showHomePage(req, res)
})

route.get('/register', (req, res) => {
    authController.showRegisterPage(req, res)
});

route.post('/register', registerValidation, (req, res) => {
    authController.registerUser(req, res);
})

route.get('/login', (req, res) => {
    authController.showLoginPage(req, res);

});

route.post('/login', loginValidation, (req, res) => {
    authController.loginUser(req, res);
});

route.get('/logout', (req, res) => {
    authController.logout(req, res);
})

route.get('/profile', authMiddleware, (req, res) => {
    authController.showProfile(req, res);
})

module.exports = route;