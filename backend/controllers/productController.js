const Product = require("../models/productModel");
const ErrorHander = require("../utils/errorhander");

//create product -- admin and seller

exports.createProduct = async (req,res,next) => {
    
    const product =  await Product.create(req.body);

    res.status(201).json({
        success:true,
        product
    })
}

//get all product
exports.getAllProducts = async(req,res)=>{

    const products = await Product.find();

    res.status(200).json({
        success:true,
        products
    })
}

//get product details
/*
exports.getProductDetails = async(req,res,next)=>{
    const product = await Product.findById(req.params.id);

    if(!product){
        return next( new ErrorHander("Product not found",404));

    }
    res.status(200).json({
        success:true,
        product
    })
}
*/

exports.getProductDetails =  async (req,res,next) => {

    const product = await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHander("product not found" , 404));
    }

    res.status(200).json({
        success:true,
        product,
       // productCount
    });

};


// update product -- admin  and seller

exports.updateProduct = async (req,res,next)=>{

    let product = Product.findById(req.params.id);

    if(!product){
        return res.status(500).json({
            success:false,
            message:"product not found"
        })
    }

    product = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true,useFindAndModify:false});

    res.status(200).json({
        success:true,
        product
    })
}

//  delete product -- admin and seller

exports.deleteProduct = async (req,res,next)=>{

    const product = await Product.findById(req.params.id);

    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product not found"
        })
    }

    await product.remove();

    res.status(200).json({
        success:true,
        message:"Product deleted successfully"
    })
}