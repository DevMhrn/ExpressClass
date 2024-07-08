const mongoose = require('mongoose');

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

module.exports = mongoose.model('Product', productSchema);

