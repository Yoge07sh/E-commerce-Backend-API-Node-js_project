const Category = require('../models/Category');

const getCategories = async (req, res) => {
    try {
        const categories = await Category.find();

        res.render("admin/categories/category",{categories});
    } catch (err) {
        res.status(500).send(err.message);
    }
}

const showCategoryPage = (req, res) => {
    res.render('admin/categories/add');
}
const addCategory = async (req, res) => {
    try {
        const category = new Category(req.body);
        await category.save();
        res.redirect('admin/categories');
    } catch (err) {
        res.status(500).send(err.message);
    }
}
module.exports = {
    getCategories,
    showCategoryPage,
    addCategory
}