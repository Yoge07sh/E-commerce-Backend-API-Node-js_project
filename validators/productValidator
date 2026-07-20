const { body } = require("express-validator");

const productValidation = [
    body("name")
        .trim()
        .notEmpty()
        .withMessage("Product name is required")
        .isLength({ min: 2 })
        .withMessage("Product name must be at least 2 characters"),

    body("price")
        .notEmpty()
        .withMessage("Price is required")
        .isFloat({ min: 1 })
        .withMessage("Price must be greater than 0"),

    body("category")
        .notEmpty()
        .withMessage("Please select a category")
];

module.exports = productValidation;