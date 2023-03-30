const mongoose=  require('mongoose')

 
const doctorSchema = new mongoose.Schema({
    userId:{
        type:String,
    },
    firstName:{
        type:String,
        required:[true,'first name is required']
    },
    lastName:{
        type:String,
        required:[true,'last name is required']
    },
    phone:{
        type:String, 
        required:[true,'phone number is required']
       },
       email:{
        type:String,
        required:[true,'email is required']
       },
       website:{
     type:String,
       }
       ,
       address:{
        type:String,
        required:[true,'address is required']

       },
       specialization:{
        type:String,
        required:[true,'required']

       },
       experience:{
        type:String,
        required:[true,'experience is required']

       },
       feesperconsultation:{
        type:Number,
        required:[true,'fees is required']
       },
       timings:{
        type:Object,
        required:[true,'timings is required']  
       },
},{timestamps: true})

const doctorMOdel = mongoose.model('users',doctorSchema)


module.exports= doctorModel