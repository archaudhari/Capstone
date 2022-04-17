const mongoose = require ('mongoose');

const shopSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter shop name"],
        trim:true
    },

   description: {
        type:String,
        required:[true,"Please enter shop description"]
    },
    address: {
        type:String,
        required:[true,"Please enter shop address"]
    },

   
    rating:{
        type:Number,
        default:0
    },

    images:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],

    category:{
        type:String,
        required:[true,"please enter product category"],

    },


    numOfReviews:{
        type:Number,
        default:0
    },

    reviews:[
        {
            name:{
                type:String,
                required:true,
            },
            rating:{
                type:Number,
                required:true,
            },
            comment:{
                type:String,
                required:true
            }
        }
    ],
    user:{
        type:mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    },
   


    createdAt:{
        type:Date,
        default:Date.now
    }


})

module.exports = mongoose.model("Shop",shopSchema)