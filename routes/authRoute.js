const express = require('express');
const route = express.Router();
const authController = require('../controllers/authController')
const {registerValidation} = require('../validators/authValidator');
route.get("/register", (req, res) => {
    authController.showRegisterPage(req, res)
});

route.get("/login", (req, res) => {
    authController.showLoginPage(req, res);

});
route.post('/register', (req, res) => {
    authController.registerUser(req, res);
})
module.exports = route;