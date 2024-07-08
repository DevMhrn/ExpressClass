const express = require('express');
const router = express.Router();
const  ProductModel = require('../models/productModel');
const productControllers = require('../controllers/productControllers');




const mongoose = require('mongoose');


//create a new product
router.post('/product',productControllers.postProduct );
//post array of products
router.post('/product/bulk',productControllers.postProducts );

//get all the products
router.get('/products', productControllers.getAllProducts);
//get product by id
router.get('/product/:id', productControllers.getProductbyId);


//update the product 
router.put('/product/:id', productControllers.updateProduct);


//patch the product
router.patch('/product/:id', productControllers.patchProduct);


//delete the product
router.delete('/product/:id', productControllers.deleteProduct);


module.exports = router;

