const express = require('express');

const router = express.Router(); 

const {getAllProducts,getProductsById} = require("../../controllers/products")
//Api get all 

router.get('/',getAllProducts);

//Api call to get by id 
router.get('/:id',getProductsById);

module.exports = router;