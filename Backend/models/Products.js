//Setting up the product schema that are gonna be used .


const mongoose = require("mongoose"); 

const productSchema = new mongoose.Schema({ 
    name:{ 
        type:String, 
        required:true
    }, 

    description:{ 
        type:String, 
        required:true
    }, 

    price:{ 
        type:Number, 
        required:true 
    }, 

    animalsInStock:{ 
        type:Number, 
        required:true 
    },  

    imagesUrl:{ 
        type:String, 
        required:true
    }
})  

const Product = mongoose.model("product",productSchema); 

model.export = Product;