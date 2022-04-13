const Shop = require("../models/shopModel")

// create Shop -- admin  
exports.createShop = async (req,res,next) => {
    
    const shop =  await Shop.create(req.body);

    res.status(201).json({
        success:true,
        shop
    })
}


// get all shops
exports.getAllShops = async (req,res)=>{

    const shops = await Shop.find();
    res.status(200).json({
        success:true,
        shops
    })
}

//get shop details

exports.getShopDetails = async(req,res,next)=>{
    const shop = await Shop.findById(req.params.id);

    if(!shop){
        return res.status(500).json({
            success:false,
            message:"Shop not found"
        })

    }
    res.status(200).json({
        success:true,
        shop
    })
}



// update shop -- admin 

exports.updateShop = async (req,res,next)=>{

    let shop = Shop.findById(req.params.id);

    if(!shop){
        return res.status(500).json({
            success:false,
            message:"shop not found"
        })
    }

    shop = await Shop.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true,useFindAndModify:false});

    res.status(200).json({
        success:true,
        shop
    })
}

//  delete shop -- admin 

exports.deleteShop = async (req,res,next)=>{

    const shop = await Shop.findById(req.params.id);

    if(!shop){
        return res.status(500).json({
            success:false,
            message:"Shop not found"
        })
    }

    await shop.remove();

    res.status(200).json({
        success:true,
        message:"Shop deleted successfully"
    })
}