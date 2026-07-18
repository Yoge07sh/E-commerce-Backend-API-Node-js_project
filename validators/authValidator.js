const { body } = require('express-validator');

//register validator
const registerValidation = [
    body('firstName')
        .trim()
        .notEmpty()
        .withMessage('first name is required'),


    body('lastName')
        .trim()
        .notEmpty()
        .withMessage('last name is required'),

    body('email')
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
];

//login validator
const loginValidation = [
    body('email')
        .trim()
        .notEmpty()
        .withMessage('email is required')
        .isEmail()
        .withMessage('enter a valid email'),

    body('password')
        .trim()
        .notEmpty()
        .withMessage('password is required')

];

module.exports = {
    registerValidation,
    loginValidation

};