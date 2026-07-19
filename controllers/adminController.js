const User = require('../models/User');
const Category = require('../models/Category');
const Product = require('../models/Product');
const Order = require('../models/Order');


const adminDashboard = (req, res) => {
    try {
        res.render('admin/adminDashboard');
    } catch (err) {
        console.log(err);
    }
}


module.exports = {
    adminDashboard
}