const Category = require('../models/Category');

const getCategories = async (req, res) => {
    try {
        const categories = await Category.find();

        res.render("categories/category", {
            categories
        });
    } catch (err) {
        res.status(500).send(err.message);
    }
}

const showCategoryPage = (req, res) => {
    res.render('categories/add');
}
const addCategory = async (req, res) => {
    try {
        const category = new Category(req.body);
        await category.save();
        res.redirect('/categories');
    } catch (err) {
        res.status(500).send(err.message);
    }
}
module.exports = {
    getCategories,
    showCategoryPage,
    addCategory
}