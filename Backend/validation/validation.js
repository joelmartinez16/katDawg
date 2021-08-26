const {check,validationResult} = require('express-validator');

exports.validateRequest =[ 

    check('firstName')
  .notEmpty()
  .withMessage('fisrtName is required in order to proceed!'), 
  check('lastName')
  .notEmpty() 
  .withMessage('lastName is required in order to proceed!'), 
  check('username')
  .notEmpty() 
  .withMessage('username is required in order to proceed!'),  
  check('email')
  .isEmail() 
  .withMessage('email is required in order to proceed!'), 
  check('password') 
  .isLength({min:8})
  .isEmpty() 
  .withMessage('password must be a minimum 8 characters long ')
] 

exports.isRequestValidated = (req,res,next) => { 
    const err = validationResult (req); 
    if (err.array().length > 0){ 
        return res.status(400).json({err:err.array()[0].msg})
    }
}