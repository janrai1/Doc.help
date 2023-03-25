const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'name is required']
    },
    email:{
        type:String,
        required:[true,'email is required'],

    },
    passsword:{
        type:String,
        required:[true,'password id required'],
    },


});
const userModel = mongoose.model('users',userSchema)

module.exports= userModel