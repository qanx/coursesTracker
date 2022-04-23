
const mongoose = require("mongoose")

const CourseSchema = new mongoose.Schema({

    title:{
        type:String,
        required:true,
        unique:true

    },
    duration:{
        type:Number,
        required:true

    },
    img:{
        type:String,
        default:"https://st2.depositphotos.com/3591429/5246/i/950/depositphotos_52469839-stock-photo-people-and-learning-concept.jpg"

    }
    ,desc:{
        type:String,

    },
    path :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Path'
    }


}, {timestamps: true})

module.exports = mongoose.model("Course",CourseSchema)