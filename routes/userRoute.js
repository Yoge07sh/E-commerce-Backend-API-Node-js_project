const express = require('express');
const route = express.Router();
const authMiddleware = require('../middleware/authMiddleware')

route.get('/', authMiddleware, (req, res) => {
    userController.showHomePage(req, res);
})

route.get('/categories', authMiddleware, (req, res) => { 
    userController.showCategory(req,res)
})

module.exports = route;