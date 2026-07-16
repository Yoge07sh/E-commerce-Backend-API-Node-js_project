const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = new Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    }
});

module.exports = mongoose.model('Product',productSchema);