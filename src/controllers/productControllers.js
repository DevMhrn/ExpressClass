const  ProductModel = require( "../models/productModel");



exports.postProduct = async (req, res)=>{
    const product = ProductModel.create({
        product_name: req.body.product_name,
        product_price: req.body.product_price,
        isInStock: req.body.isInStock,
        category: req.body.category
    });
    console.log(product);
    return res.status(201).json({message:"Product Created"});


};

exports.postProducts = async (req, res)=>{
    const product = ProductModel.create({
        product_name: req.body.product_name,
        product_price: req.body.product_price,
        isInStock: req.body.isInStock,
        category: req.body.category
    });
    console.log(product);
    return res.status(201).json({message:"Products Created"});
};

exports.getAllProducts = async (req, res)=>{
    const products = await ProductModel.find({});
    return res.status(200).json(products);  
};

exports.getProductbyId = async (req, res)=>{
    const product = await ProductModel.findById(req.params.id);
    if(!product){
        return res.status(404).json({message:"Product not found"});
    }
    return res.status(200).json(product);
};

exports.updateProduct = async (req, res)=>{
    const product = await ProductModel.findByIdAndUpdate(req.params.id, {
        product_name: req.body.product_name,
        product_price: req.body.product_price,
        isInStock: req.body.isInStock,
        category: req.body.category
    }, {new:true});
    if(!product){
        return res.status(404).json({message:"Product not found"});
    }
    return res.status(200).json(product);
};

exports.patchProduct = async (req, res)=>{
    const product = await ProductModel.findByIdAndUpdate(req.params.id, {
        isInStock: req.body.isInStock
    }, {new:true});
    if(!product){
        return res.status(404).json({message:"Product not found"});
    }
    return res.status(200).json(product);
};

exports.deleteProduct = async (req, res) => {
    const product = await ProductModel.findByIdAndDelete(req.params.id);
    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }
    return res.status(200).json(product);
};  




