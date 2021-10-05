const mongoose = require('mongoose');


//Creating person prototype

const postSchema = new mongoose.Schema({
    name:{
        type:String,
        default:"someone"
    },
    age:{
        type:Number,
        default:0000
    }, 
    favoriteFood:{
        type:[String],
        default: undefined
    }
})



module.exports = mongoose.model('Person', postSchema)