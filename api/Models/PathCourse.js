
const mongoose = require("mongoose")

const PathSchema = new mongoose.Schema({

    pathTitle: {
        type: String,
        required:true
    }
    ,

    courses:[{
        
        type: mongoose.Schema.Types.ObjectId,
        ref:"Course",
       
    }]



} ,{timestamps: true})

module.exports = mongoose.model("Path", PathSchema)