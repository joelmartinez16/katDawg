//Creating the user routes 

const express = require('express'); 
const router = express.Router();  
const {signup, signin, requireSignin} = require("../../controllers/user"); 
const {isRequestValidated,validateRequest} = require('../../validation/validation')

router.post('/signup',isRequestValidated,validateRequest,signup); 

router.post('/signin',signin); 

router.post('/profile', requireSignin , (req,res) => { 
  res.status(200).json({ user:'profile'})
});

module.exports = router

