const express = require("express");
const router = express.Router();

const cartController = require("../controllers/cartController");
const authMiddleware = require("../middleware/authMiddleware");

// View Cart
router.get(
    "/cart",
    authMiddleware,
    cartController.getCart
);

// Add to Cart
router.post(
    "/cart/add/:id",
    authMiddleware,
    cartController.addToCart
);

// Increase Quantity
router.post(
    "/cart/increase/:id",
    authMiddleware,
    cartController.increaseQuantity
);

// Decrease Quantity
router.post(
    "/cart/decrease/:id",
    authMiddleware,
    cartController.decreaseQuantity
);

// Remove Item
router.post(
    "/cart/remove/:id",
    authMiddleware,
    cartController.removeItem
);

module.exports = router;