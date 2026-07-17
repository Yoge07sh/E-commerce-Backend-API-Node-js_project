const { body } = require('express-validator');

const registerValidation = [
    body('firstName')
        .trim()
        .notEmpty
        .withMessage('first name is required'),


    body('lastName')
        .trim()
        .notEmpty
        .withMessage('last name is required'),

    body.apply('email')
        .trim()
        .notEmpty()
        .withMessage('email is required')
        .isEmail()
        .withMessage('plz enter valid  email'),

    body('password')
        .trim()
        .notEmpty()
        .withMessage('password is required')
        .isLength({ min: 5 })
        .withMessage('password must have 5 characters')
]

module.exports = {
    registerValidation

};