const experss =require('express')
const { GetPathCourses, NewCourse, addCompletedCourse,GetCompletedCourses } = require('../Controllers/CourseController')
const { CraetePath, AddCourseToPath, GetAllPathCoursess } = require('../Controllers/PathCountroller')
const router = experss.Router()

router.route('/').post(NewCourse)
//All courses based on Path " params  "id""
router.route('/pathcourses/:id').get(GetAllPathCoursess)

//below For user Path
router.route('/:id').get(GetPathCourses)
router.route('/usercompleted/:id').get(GetCompletedCourses)
// router.route('/')
router.route('/path').post(CraetePath).put(AddCourseToPath)
router.route('/completedcourse').put(addCompletedCourse)
// router.route('/path/add').post(AddCourseToPath)
module.exports = router