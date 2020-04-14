const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema= new Schema({

    email:{
        type:String,
        required: true
    },

    content:{
        type:String,
        required:true,
    },

    
    comment_date: {
        type: Date,
        default: Date.now
    },

})



module.exports = mongoose.model('Comment', commentSchema)