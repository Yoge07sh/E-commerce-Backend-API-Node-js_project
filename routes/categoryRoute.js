const express = require('express');
const route = express.Router();
const categoryController = require('../controllers/categoryController');
const authMiddleware = require('../middleware/authMiddleware');
route.get('/categories', (req, res) => {
    categoryController.getCategories(req, res);
});

route.get('/add/categories', authMiddleware, (req, res) => {
    categoryController.showCategoryPage(req, res);
});

route.post('/add/categories', authMiddleware, (req, res) => {
    categoryController.addCategory(req, res);
});


module.exports = route;