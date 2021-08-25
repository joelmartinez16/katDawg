//Creating the user routes 

const express = require('express'); 
const router = express.Router(); 
const User = require('../../models/User');

router.post('/signing',(req,res)=>{ 

});  

router.post('/signup',(req,res)=>{ 

        User.findOne({email:req.body.email}) 
        .exec((err, user) =>{ 
            if (user) return res.status(400).json({ 
                message:'Sorry User already registered !'
            }); 

            const{ 
                firstName, 
                lastName, 
                email, 
                password
            }= req.body; 

            const _user = new User({firstName,lastName,email,password}); 

            _user.save((err,data)=>{ 
                if (err){ 
                    return res.status(400).json({ 
                        message:'Sorry there has been an error '
                    })
                }if(data){ 
                    return res.status(201).json({ 
                        message:"User was Created"
                    })
                }
            })



        });
}); 

module.exports = router

