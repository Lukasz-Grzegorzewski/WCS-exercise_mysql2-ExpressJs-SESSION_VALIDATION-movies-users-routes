const { body, validationResult } = require('express-validator');

const validateMovie = [
    body("title").isLength({ min: 1 }).withMessage('Field email is missing').isLength({ max: 255 }).withMessage('Too long. Max 255characters'),
    body("director").isLength({ min: 1 }).withMessage('Field director is missing'),
    body("year").isLength({ min: 1 }).withMessage('Field year is missing'),
    body("color").isLength({ min: 1 }).withMessage('Field color is missing'),
    body("duration").isLength({ min: 1 }).withMessage('Field duration is missing'),
    (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(422).json({ validationErrors: errors.array() });
        } else {
            next();
        }
    },
];

const validateUpdateMovie = [
    body("title").isLength({ max: 255 }).withMessage('title is too long. Max 255characters'),
    body("director").isLength({ max: 255 }).withMessage('director is too long. Max 255characters'),
    body("year").isLength({ max: 255 }).withMessage('year is too long. Max 255characters'),
    body("color").isLength({ max: 255 }).withMessage('color is too long. Max 255characters'),
    body("duration").isNumeric().withMessage('Field duration is not a number'),
    (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(422).json({ validationErrors: errors.array() });
        } else {
            next();
        }
    },
];

const validateUser = [
    body("email").isEmail().withMessage('Email is not correct'),
    body("firstname").isLength({ max: 255 }).withMessage('firstname is too long. Max 255characters'),
    body("lastname").isLength({ max: 255 }).withMessage('last name is too long. Max 255characters'),
    (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(422).json({ validationErrors: errors.array() });
        } else {
            next();
        }
    },
];

module.exports = {
    validateMovie,
    validateUser,
    validateUpdateMovie,
};



// const validateMovie = (req, res, next) => {
//     const { title, director, year, color, duration } = req.body;
//     const errors = [];

//     if (title == null) {
//         errors.push({ field: "title", message: "This field is required" });
//     } else if (title.length >= 255) {
//         errors.push({ field: "title", message: `${title.length} characters. Should contain less than 255 characters` });
//     }
//     if (director == null) {
//         errors.push({ field: "director", message: "This field is required" });
//     }
//     if (year == null) {
//         errors.push({ field: "year", message: "This field is required" });
//     }
//     if (color == null) {
//         errors.push({ field: "color", message: "This field is required" });
//     }
//     if (duration == null) {
//         errors.push({ field: "duration", message: "This field is required" });
//     }
//     if (errors.length) {
//         res.status(422).json({ validationErrors: errors });
//     } else {
//         next();
//     }
// };