const { Schema,Model} = require("mongoose");  
const bcrypt = require("bcrypt");

const userSchema = new Schema({ 

  

  firstName:{ 
    type: String, 
    required: true , 
    trim: true, 
    min: 3, 
    max:15
  }, 

  lastName:{ 
    type: String, 
    required: true , 
    trim: true, 
    min: 3, 
    max:15
  }, 

  username:{ 
    type:String, 
    required:true, 
    trim:true,
    unique:true, 
    index:true 

  }, 

  email:{ 
    type:String, 
    required:true, 
    trim:true , 
    unique:true,
    match: [/.+@.+\..+/, 'Must use a valid email address'], 
  }, 

  hash_password:{ 
    type:String, 
    required:true
  }, 

  role:{ 
    type:String, 
    enum:["user","admin"], 
    default:"user"
  }, 

  Signup:{ 
    type:String
  }, 

  Home:{ 
    type:String
  },
  Login:{
    type:String
  },

  Shop:{
  type:String
},
AvailablePets:{
  type:String
},
Cart:{
  type:String
},
About:{
  type:String
},
Checkout_sessions:{
  type:String
}
 
  



},{timestamps:true});  

userSchema.virtual("password") 
.set(function(password){ 
  this.hash_password = bcrypt.hashSync(password,10)
})  

userSchema.virtual("fullName") 
.get(function(){ 
  return `${this.firstName}${this.lastName}`;
})


userSchema.methods = { 
  authenticate:function(password){ 
    return bcrypt.compareSync(password,this.hash_password)
  }
}

module.exports = mongoose.model("User",userSchema)