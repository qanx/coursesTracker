const mongoose =require("mongoose")

const BookingSchema =new mongoose.Schema({
    
    user:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:[true,'provide user']},
    course:{type:mongoose.Schema.Types.ObjectId,ref:"Course",required:[true,'provide course']},
    date:{type:Date,required:[true,'provide date'] },
    reqStatus:{type:Boolean,default:false}
},{timestamps:true})

module.exports = mongoose.model("Booking",BookingSchema)