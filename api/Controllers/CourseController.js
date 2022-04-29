const Course = require('../Models/Course.js')
const User=require('../Models/User')
const Path = require("../Models/PathCourse");



//get  courses all courses in this path
const GetPathCourses=async (req,res)=>{

    try {
        const user = await User.findById(req.params.id).populate('path')
        // poplute to show related courses
            //   poplute to show related courses
        const userPath= await Path.findById(user.path._id).populate('courses')
        // console.log(userPath)
        // console.log(user)
        // console.log(user)
        res.status(200).json({courses:userPath.courses,path:userPath.pathTitle})
    } catch (error) {
        res.status(500).json(error)        
    }
}
//get completed courses
const GetCompletedCourses=async (req,res)=>{
console.log(req.params)
    try {
        const user = await User.findById(req.params.id).populate('completedCourses')
        console.log(user)
        // poplute to show related courses
            //   poplute to show related courses
        // const userPath= await Path.findById(user.path._id).populate('courses')
        // console.log(userPath)
        // console.log(user)
        // console.log(user)
        res.status(200).json(user.completedCourses)
    } catch (error) {
        res.status(500).json(error)
        
    }
 
}



// get all paths courses

const GetPAllathsCourses=async (req,res)=>{

    console.log("first")
    try {

            //   poplute to show related courses
        const allPathCourses= await Path.find().populate('courses')
        console.log(allPathCourses)
        // console.log(user)
        // console.log(user)
        res.status(200).json(allPathCourses)
    } catch (error) {
        res.status(500).json(error)        
    }
}


const NewCourse = async(req,res)=>{
    console.log(req.body)
    const newCourse = new Course(req.body)
    try {
        console.log(newCourse)

        await newCourse.save()
         pathToAddTo = await Path.findByIdAndUpdate(req.body.path,{ $addToSet: { courses: newCourse._id } }, { new: true })
         res.status(201).json(newCourse)
    } catch (error) {
        res.status(500).json(error.response)
        
    }
}

//const add new course to user  , Mostly admin
const addCompletedCourse=async(req,res)=>{

    try {
        const user = await User.findById(req.body.userId)
        const completedCourse=req.body.completedCourse
        user.completedCourses.push(completedCourse)
        await user.save()
    } catch (error) {
        res.status(500).json(error)
    }
   
}


const DeleteCourse = async (req,res)=>{

    console.log(req.body)

    try {
    const CourseToBeDeleted= await Course.findByIdAndRemove(req.params.id)
    res.status(200).json(CourseToBeDeleted)

    } catch (error) {
        res.status(500).json(error)
        
    }


}

module.exports = {DeleteCourse,GetPathCourses,NewCourse,addCompletedCourse,GetCompletedCourses,GetPAllathsCourses}