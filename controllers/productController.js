const Product = require("../models/Product");
const Category = require("../models/Category");

const getProducts = async (req, res) => {
    const products = await Product.find().populate("category");

    res.render("admin/products/product", { products });
};

const showAddProductPage = async (req, res) => {
    try {
        const categories = await Category.find();

        res.render("admin/products/addproduct", {
            categories
        });
    } catch (err) {
        console.log(err);
        res.status(500).send(err.message);
    }
};

const addProduct = async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        console.log('added')
        res.redirect('admin/products/add');
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    showAddProductPage,
    getProducts,
    addProduct
};