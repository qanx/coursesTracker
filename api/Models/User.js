var mongoose = require('mongoose');
const { search } = require('../Routes/CourseRoute');

var UserSchema = new mongoose.Schema({
  username:{type:String,required:true,unique:true},
  email: {type:String,required:true,unique:true},
  password:{type: String,required:true},
  bio: String,
  job:String,
  isAdmin: {type:Boolean,default:false},
  country:String,
  image: {type:String,default:"https://www.w3schools.com/w3images/avatar5.png"},
  path:{
      type: mongoose.Schema.Types.ObjectId,
      ref:"Path",
      default:"626372bff72f6bbd698a5e0b"
  },
  completedCourses:[{ type: mongoose.Schema.Types.ObjectId,   ref:"Course"}]
}, {timestamps: true});

module.exports =mongoose.model('User', UserSchema);