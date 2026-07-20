const Cart = require("../models/Cart");
const Product = require("../models/Product");

// Add Product to Cart
const addToCart = async (req, res) => {
    try {

        const userId = req.user.id;
        const productId = req.params.id;

        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).send("Product not found");
        }

        const existingItem = await Cart.findOne({
            user: userId,
            product: productId
        });

        if (existingItem) {

            existingItem.quantity += 1;

            await existingItem.save();

        } else {

            const cartItem = new Cart({
                user: userId,
                product: productId,
                quantity: 1
            });

            await cartItem.save();
        }

        res.redirect("/user/cart");

    } catch (err) {
        res.status(500).send(err.message);
    }
};

// View Cart
const getCart = async (req, res) => {
    try {

        const cartItems = await Cart.find({
            user: req.user.id
        }).populate("product");

        let total = 0;

        cartItems.forEach(item => {
            total += item.product.price * item.quantity;
        });

        res.render("user/cart", {
            cartItems,
            total
        });

    } catch (err) {
        res.status(500).send(err.message);
    }
};

// Increase Quantity
const increaseQuantity = async (req, res) => {
    try {

        const cartItem = await Cart.findById(req.params.id);

        if (!cartItem) {
            return res.status(404).send("Cart Item not found");
        }

        cartItem.quantity += 1;

        await cartItem.save();

        res.redirect("/user/cart");

    } catch (err) {
        res.status(500).send(err.message);
    }
};

// Decrease Quantity
const decreaseQuantity = async (req, res) => {
    try {

        const cartItem = await Cart.findById(req.params.id);

        if (!cartItem) {
            return res.status(404).send("Cart Item not found");
        }

        if (cartItem.quantity > 1) {

            cartItem.quantity -= 1;

            await cartItem.save();

        }

        res.redirect("/user/cart");

    } catch (err) {
        res.status(500).send(err.message);
    }
};

// Remove Item
const removeItem = async (req, res) => {
    try {

        await Cart.findByIdAndDelete(req.params.id);

        res.redirect("/user/cart");

    } catch (err) {
        res.status(500).send(err.message);
    }
};

module.exports = {
    addToCart,
    getCart,
    increaseQuantity,
    decreaseQuantity,
    removeItem
};