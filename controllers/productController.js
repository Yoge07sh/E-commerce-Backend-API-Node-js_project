const Product = require("../models/Product");
const Category = require("../models/Category");
const { validationResult } = require("express-validator");

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
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            errors: errors.array()
        });
    }
    try {
        const product = new Product(req.body);
        await product.save();
        console.log('added')
        res.redirect('admin/products/add');
    } catch (err) {
        console.log(err)
    }
}

const showEditProductPage = async (req, res) => {
    try {

        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).send("Product not found");
        }

        const categories = await Category.find();

        res.render("admin/products/edit", {
            product,
            categories
        });

    } catch (err) {
        res.status(500).send(err.message);
    }
};

const updateProduct = async (req, res) => {
    try {
        const id = req.params.id;

        await Product.findByIdAndUpdate(
            id,
            req.body,
            {
                runValidators: true
            }
        );

        res.redirect("/admin/products");

    } catch (err) {
        console.log(err);
    }
};

const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;
        await Product.findByIdAndDelete(id);
        res.redirect('/admin/products');
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    showAddProductPage,
    getProducts,
    addProduct,
    showEditProductPage,
    updateProduct,
    deleteProduct
};