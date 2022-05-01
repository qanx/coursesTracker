 
const Path = require('../Models/PathCourse')
const Course = require('../Models/Course')
const CraetePath = async (req, res) => {

    console.log(req.body.pathTitle)
    const newPath = new Path({ pathTitle: req.body.pathTitle })

    try {
        await newPath.save()
        res.status(201).json(newPath)
    } catch (error) {
        res.status(500).json(error)

    }
}

const AddCourseToPath = async (req, res) => {

    const { courseId, pathId } = req.body

    try {
        const courseIdtoAddit = await Course.findById(courseId)
        if (courseIdtoAddit) {

            try {
                const pathToAddTo = await Path.findByIdAndUpdate

                    (pathId, { $addToSet: { courses: courseIdtoAddit._id } }, { new: true })
                res.status(200).json(pathToAddTo)
            } catch (error) {
                res.status(500).json(error)

            }


        }
        else {
            res.status(500).json("course not found")

        }
    } catch (error) {
        res.status(500).json(error)

    }

    // const pathToAddTo = await Path.findById(pathId)


    // res.json(courseIdtoAddit)

 
 


 
}

const GetAllPaths =async (req,res)=>{

 console.log("allpath")
    try {
      const allPath  = await  Path.find()
    // console.log(allPath)
      res.status(200).json(allPath)
    } catch (error) {
        
      res.status(500).json(error)
    }
      
      
     
  }

const GetAllPathCoursess =async (req,res)=>{

     
    try {
      const allPathCourses = await  Path.findById(req.params.id).populate('courses')
    // console.log(allPathCourses)
      res.status(200).json(allPathCourses)
      console.log(allPathCourses)
    } catch (error) {
        
      res.status(500).json(error)
    }
      
      
     
  }
module.exports = { CraetePath, GetAllPathCoursess,AddCourseToPath,GetAllPaths }