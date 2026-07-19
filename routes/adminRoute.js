const express = require('express');
const route = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/authMiddleware');
const adminController = require('../controllers/adminController');

route.get('/dashboard', authMiddleware, adminMiddleware, (req, res) => {
    adminController.adminDashboard(req, res);
})

module.exports = route;