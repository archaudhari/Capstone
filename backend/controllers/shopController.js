const Shop = require("../models/shopModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");

// create Shop -- admin  
exports.createShop = catchAsyncErrors (async (req,res,next) => {

    req.body.user = req.user.id;
    
    const shop =  await Shop.create(req.body);

    res.status(201).json({
        success:true,
        shop
    })
})


// get all shops
exports.getAllShops = catchAsyncErrors ( async (req,res)=>{

    const resultPerPage = 8;

    const apiFeature = new ApiFeatures(Shop.find(),req.query).search().filter().pagination(resultPerPage);

    const shops = await apiFeature.query;

    //const shops = await Shop.find();
    res.status(200).json({
        success:true,
        shops
    })
})

//get shop details

// exports.getShopDetails = async(req,res,next)=>{
//     const shop = await Shop.findById(req.params.id);

//     if(!shop){
//         return res.status(500).json({
//             success:false,
//             message:"Shop not found"
//         })

//     }
//     res.status(200).json({
//         success:true,
//         shop
//     })
// }

// //////////




// exports.getShopDetails = async(req,res,next)=>{
//     const shop = await Shop.findById(req.params.id);

//     if(!shop){
//         return res.status(500).json({
//             success:false,
//             message:"Shop not found"
//         })

//     }
//     res.status(200).json({
//         success:true,
//         shop
//     })
// }

//////////

exports.getShopDetails = catchAsyncErrors( async (req,res,next) => {

    const shop = await Shop.findById(req.params.id);

    if(!shop){
        return next(new ErrorHander("shop not found" , 404));
    }

    res.status(200).json({
        success:true,
        shop,
       // shopCount
    });

});

// update shop -- admin 

exports.updateShop = catchAsyncErrors (async (req,res,next)=>{

    let shop = Shop.findById(req.params.id);

    if(!shop){
        return next(new ErrorHander("shop not found" , 404));
    }


    shop = await Shop.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true,useFindAndModify:false});

    res.status(200).json({
        success:true,
        shop
    })
})

//  delete shop -- admin 

exports.deleteShop = catchAsyncErrors (async (req,res,next)=>{

    const shop = await Shop.findById(req.params.id);

    if(!shop){
        return next(new ErrorHander("Shop not found" , 404));
    }


    await shop.remove();

    res.status(200).json({
        success:true,
        message:"Shop deleted successfully"
    })
})