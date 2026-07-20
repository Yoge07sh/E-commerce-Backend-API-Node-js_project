const express = require('express');
const route = express.Router();
const categoryController = require('../controllers/categoryController');
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');

route.get('/categories', (req, res) => {
    categoryController.getCategories(req, res);
});

route.get('/add/categories', authMiddleware, adminMiddleware, (req, res) => {
    categoryController.showCategoryPage(req, res);
});

route.post('/add/categories', authMiddleware, adminMiddleware, (req, res) => {
    categoryController.addCategory(req, res);
});


module.exports = route;