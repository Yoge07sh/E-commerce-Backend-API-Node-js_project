const express = require("express");
const route = express.Router();

const productController = require("../controllers/productController");
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

//view products
route.get('/products',  (req, res) => {
    productController.getProducts(req, res);
});

//get add Products
route.get('/products/add', authMiddleware, adminMiddleware, (req, res) => {
    productController.showAddProductPage(req, res);
});

route.post('/products/add', authMiddleware, adminMiddleware, (req, res) => {
    productController.addProduct(req, res);
})

route.get(
    "/products/edit/:id", authMiddleware, adminMiddleware, productController.showEditProductPage
);

route.post('/products/update/:id', authMiddleware, adminMiddleware, (req, res) => {
    productController.updateProduct(req, res);
})

route.post('/products/delete/:id', authMiddleware, adminMiddleware, (req, res) => {
    productController.deleteProduct(req, res);
})

module.exports = route;