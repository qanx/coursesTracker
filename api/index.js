const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
const CourseRoute = require('./Routes/CourseRoute')
const UserRoute = require('./Routes/UserRoute')
const BookingRoute=require('./Routes/BookingRoute')
require("dotenv").config()
 

 //connect to database
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  
  .then(() => console.log('mongoDB connected...')).catch(err=>console.log(err));
app.use(express.json())
app.use(morgan('tiny'))
app.use("/api/Course",CourseRoute)
app.use("/api/User",UserRoute)
app.use("/api/Booking",BookingRoute)


app.listen(3300,console.log("running"))
app.get('/',(req,res)=>res.send("ssss"))