const User = require('../models/User'); 
const jwt = require('jsonwebtoken');

exports.signup = (res, req) =>{ 

    User.findOne({email:req.body.email}) 
 .exec((err,user) =>{ 
     if (user) return res.status(400).json({ 
         message:'Sorry User already registered !'
     }); 

     const{ 
         firstName, 
         lastName, 
         username, 
         email, 
         password
     }= req.body; 

     const _user = new User({firstName,lastName,username,email,password}); 

     // User.create(req.body) 
     // .then((dbUserData) => { 
     //     res.json(dbUserData)Ba
     // }) 
     // .catch((err)=>{ 
     //     console.log(err); 
     //     res.status(500).json(err);
     // });
     

     _user.save((err,data)=>{  
         console.log(_user.save)
         if (err){  
             console.log(err)
             return res.status(400).json({ 
                 message:'Sorry there has been an error '
             })
         } 
         
         if(data){ 
             return res.status(201).json({ 
                 message:"User was Created"
             })
         }
     })



 });


} 

exports.signin = (req,res) =>{ 
    User.findOne({email:req.body.email}) 
    .exec((err,user)=>{  
        if (err) return res.status(400).json({error}); 
        if(user){ 

            if(user.authenticate(req.body.password)){ 
               
                const token = jwt.sign({_id: user._id},process.env.JWT_SECRET,{expiresIn:'2hr'}); 
                const {_id,firstName,lastName,username,email,role,fullName} = user; 
                res.status(200).json({ 
                    token, 
                    user:{ 
                        _id,firstName,lastName,username,email,role,fullName
                    }
                });

            }else { 
                return res.status(400).json({ 
                    message:'Invalid Password'
                })
            }
        
        }else{ 
            return res.status(400).json({ 
                message:"Something went wrong"
            })
        }


    });
} 

exports.requireSignin = (req,res,next) =>{ 
    const token = req.headers.authorization.split("")[1]; 
    console.log(token); 
    const user = jwt.verify(token,process.JWT_SECRET); 
    console.log(user);
    req.user = user;
    next();
    // jwt.decode()
}

 