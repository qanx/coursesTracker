const express = require('express')
const app = express()
const mongoose = require('mongoose')
require("dotenv").config()
const faker =require("@faker-js/faker")
const randomName =   faker.name.findName();
console.log(randomName)
//connect to database
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  
  .then(() => console.log('mongoDB connected...')).catch(err=>console.log(err));


app.listen(3300,console.log("running"))
app.get('/',(req,res)=>res.send("ssss"))