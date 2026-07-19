const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: true
    }
});

module.exports = mongoose.model('Product',productSchema);