import { check } from "express-validator";

export const signupValidation = [
    check("username").notEmpty().withMessage("Name is required"),
    check("email").isEmail().withMessage("Invalid email adress"),
    check("password").isLength({min:6}).withMessage("Password must be atleast 6 charachters")
]

export const loginValidation = [ 
    check("email").isEmail().withMessage("Invalid email address"),
    check("password").isLength({ min: 6 }).withMessage("Password should have at least 6 characters")
];


