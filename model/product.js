const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema= new Schema({

    price:{
        type:Number,
        required: true
    },

    country:{
        type:String,
        required:true,
    },

    rate :{
        type:Number,
        required:true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    register_date: {
        type: Date,
        default: Date.now
    },

})



module.exports = mongoose.model('Product',productSchema)