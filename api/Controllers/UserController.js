const User = require('../Models/User')
const bcrypt = require("bcrypt");
const Path = require("../Models/PathCourse");
const Course = require('../Models/Course');
const jwt = require('jsonwebtoken')
const JWT_SECRET = "secret"
// const Course = require("../Models/Course")
// const mongoose = require("mongoose")

const register = async (req, res) => {
    //get required data from the requset
    console.log(req.body)
    const { username, password, email, image } = (req.body)

    if (!(username && password && email)) {
        console.log("NO data")
        res.status(401).json("no data entered")
    }

    else {

        try {
            const exisitUser = await User.findOne({ email })
            if (exisitUser) {
                console.log("exisitUser")

                res.status(500).json("user exisit ,u just cant")
            } else {
                console.log("user creation")
                const salt = await bcrypt.genSalt(10);
                // now we set user password to hashed password
                const hashedPassword = await bcrypt.hash(password, salt);
                const user = new User({ username, password: hashedPassword, email, image })



                console.log("user datiles : " + user)
                await user.save()
                console.log("user saved in")
                res.status(200).json(user)
            }


        } catch (error) {
            res.status(500).json(error)
        }


    }

}

const signIn = async (req, res) => {
    const { email, password } = (req.body)
    if (!(email && password)) {
        console.log("email&&password needed ")
        res.status(500).json("email&&password needed ")
    }
    else {

        const user = await User.findOne({ email }).populate("path")
        // poplute to show related courses
        // const userPath= await Path.findById(user.path._id).populate({path:'courses',model:Course})
        // console.log(userPath.courses)
        // console.log(user)

        if (user && (await bcrypt.compare(password, user.password))) {
            // console.log(user)


            // console.log(user.Token)
            const {path, _id,isAdmin, username, image, ...others } = user._doc
            const newToken = jwt.sign({ isAdmin, id: user._id, username: user.username }, JWT_SECRET)
            console.log(newToken)
            res.status(200).json({path, _id, username, image, newToken,isAdmin })


        }
        else {
            res.status(500).json("user not found . pass")

        }

    }
}

const GetUserInfo = async (req, res) => {


    try {
        const user = await User.findById(req.params.id).populate("path").populate("completedCourses").populate({path:"path",populate:{ path:"courses"}})
        const { password, updatedAt, ...others } = user._doc

        res.status(200).json(others)
    } catch (error) {
        res.status(500).json("user not found")

    }
}

const GetAllusers = async (req, res) => {
    try {
        const users = await User.find().populate("path")

        res.status(200).json(users)
    } catch (error) {
        res.status(500).json("users not found")

    }
}



const editUser= async (req,res)=>{

    try {
        console.log(req.body)
        const users = await User.findOneAndUpdate(req.body._id,req.body)
        
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json("users not found")

    }
}

//Tokens 

const verfiyToken = async (req, res, next) => {
    const headers = req.headers['authorization']

    if (headers) {
        const token = headers.split(" ")[1]
        const ver = jwt.verify(token, JWT_SECRET, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
        
    }
}

const verfiyTokenIsAdmin = async (req, res, next) => {
    const headers = req.headers['authorization']
    console.log(headers)

    if (headers) {
        const token = headers.split(" ")[1]
        const ver = jwt.verify(token, JWT_SECRET, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.user = user;
            console.log(req.user)
            if (!req.user.isAdmin)return res.status(401).send({ msg: "Not an admin, sorry" });

            next();
        });
    } else {
        res.sendStatus(401);
        
    }
}



module.exports = {editUser,verfiyTokenIsAdmin, verfiyToken, register, signIn, GetUserInfo, GetAllusers }