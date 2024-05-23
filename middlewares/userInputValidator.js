//@external modules
const { body, validationResult } = require("express-validator");
const asyncHandler = require('express-async-handler');

const userInputRules = [
    body('name', 'Name should be at least 6 characters long').notEmpty().isLength({ min: 6 }),
    body('email','Invalid Email').notEmpty().isEmail(),
    body('mobile','Name should be minimum 6').notEmpty().matches(/^01[3-9]\d{8}$/),
    body('emargencyMobile','Name should be minimum 6').notEmpty().matches(/^01[3-9]\d{8}$/),
    body('officeId','Office Id should not be empty').notEmpty(),
    body('designation','Designation should not be empty').notEmpty(),
    body('presentaddress','Present Address should not be empty').notEmpty(),
    body('permanentaddress','Permanent Address should not be empty').notEmpty(),
    body('city','City should not be empty').notEmpty(),
    body('country','Country should not be empty').notEmpty(),
    body('concernId','Concern should not be empty').notEmpty(),
    body('departmentId','Department should not be empty').notEmpty(),
    body('role','Role should not be empty').isLength({ min : 6 }),
    body('password', 'The minimum password length is 5 characters').notEmpty().isLength({ min: 5 }),
]

const userLoginRules = [
    body('email','Invalid Email').notEmpty().isEmail(),
]


const validate = asyncHandler(async(req, res, next) => {

    try {
        
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.status(400).json({ errors : errors.array() });
        }else{
            next();
        }
    } catch (error) {
        res.status(400).json({ message : error.message });
    }
});

//@exports
module.exports = {  userInputRules,
                    userLoginRules,
                    validate
                }