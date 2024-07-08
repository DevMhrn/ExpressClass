const express = require('express');
const app = express();
const port = 8081;


const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://debashismaharana7854:mcl4CHzLPNg0cZZQ@cluster0.fczkbhx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>console.log("Connected to MongoDB"))
.catch(err=>console.error("Could not connect to MongoDB", err));



app.use(express.json());


const productSchema = new mongoose.Schema({
    product_name: 
    {
        type:String,
        required:true
    },
    product_price:
    {
        type:Number,
        required:true
    },
    isInStock:
    {
        type:Boolean,
        required:true
    }, 
    category:
    {
        type:String,
        required:true
    }   


    
      
});

const ProductModel = mongoose.model('Product', productSchema);



//create a new product
app.post('/products', async (req, res)=>{
    const product = ProductModel.create({
        product_name: req.body.product_name,
        product_price: req.body.product_price,
        isInStock: req.body.isInStock,
        category: req.body.category
    });
    console.log(product);
    return res.status(201).json({message:"Product Created"});
});

app.get('/products', async (req, res)=>{
    const products = await ProductModel.find({isInStock:true});
    return res.status(200).json(products);  
});

app.get('/products/:id', async (req, res)=>{
    const product = await ProductModel.findById(req.params.id);
    if(!product){
        return res.status(404).json({message:"Product not found"});
    }
    return res.status(200).json(product);
});



app.listen(port, ()=>{
    console.log(`Server is Listening {http://localhost:${port}} `)
});


