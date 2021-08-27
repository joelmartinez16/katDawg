const Products = require("../models/Products") 

const getAllProducts = async(req,res) =>{ 
  try{ 
      const products = await Products.find({}); 

      res.json(products);
  }catch (err){ 
      console.log(err); 
      res.status(400).json({message:"Server has made an error"}); 
  }


} 

const getProductsById = async(req,res) =>{ 
    try{ 
        const product = await Products.findById(req.params.id); 
  
        res.json(product);
    }catch (err){ 
        console.log(err); 
        res.status(400).json({message:"Server has made an error"}); 
    }
  
  
  } 

  module.exports = { 
    getAllProducts,getProductsById
  }