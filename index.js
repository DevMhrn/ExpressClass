const express = require('express');
const app = express();
app.use(express.json());
const port = 8081;
require('dotenv').config();
const productRoutes = require('./src/routes/productRoute');
const userRoutes = require('./src/routes/userRoute');


const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("Connected to MongoDB"))
.catch(err=>console.error("Could not connect to MongoDB", err));

app.use('/api', productRoutes);
app.use('/api', userRoutes);











// //create a new product
// app.post('/products', async (req, res)=>{
//     const product = ProductModel.create({
//         product_name: req.body.product_name,
//         product_price: req.body.product_price,
//         isInStock: req.body.isInStock,
//         category: req.body.category
//     });
//     console.log(product);
//     return res.status(201).json({message:"Product Created"});
// });

// app.get('/products', async (req, res)=>{
//     const products = await ProductModel.find({isInStock:true});
//     return res.status(200).json(products);  
// });

// app.get('/products/:id', async (req, res)=>{
//     const product = await ProductModel.findById(req.params.id);
//     if(!product){
//         return res.status(404).json({message:"Product not found"});
//     }
//     return res.status(200).json(product);
// });


// //update the product 
// app.put('/products/:id', async (req, res)=>{
//     const product = await ProductModel.findByIdAndUpdate(req.params.id, {
//         product_name: req.body.product_name,
//         product_price: req.body.product_price,
//         isInStock: req.body.isInStock,
//         category: req.body.category
//     }, {new:true});
//     if(!product){
//         return res.status(404).json({message:"Product not found"});
//     }
//     return res.status(200).json(product);
// });


// //patch the product
// app.patch('/products/:id', async (req, res)=>{
//     const product = await ProductModel.findByIdAndUpdate(req.params.id, {
//         isInStock: req.body.isInStock
//     }, {new:true});
//     if(!product){
//         return res.status(404).json({message:"Product not found"});
//     }
//     return res.status(200).json(product);
// });


// //delete the product
// app.delete('/products/:id', async (req, res) => {
//     const product = await ProductModel.findByIdAndDelete(req.params.id);
//     if (!product) {
//         return res.status(404).json({ message: "Product not found" });
//     }
//     return res.status(200).json(product);
// });





app.listen(port, ()=>{
    console.log(`Server is Listening {http://localhost:${port}} `)
});


