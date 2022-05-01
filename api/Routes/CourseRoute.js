const experss =require('express')
const { GetPathCourses, NewCourse, addCompletedCourse,GetCompletedCourses, GetPAllathsCourses, DeleteCourse } = require('../Controllers/CourseController')
const { CraetePath, AddCourseToPath, GetAllPathCoursess, GetAllPaths } = require('../Controllers/PathCountroller')
const { verfiyTokenIsAdmin } = require('../Controllers/UserController')
const router = experss.Router()

//get all path only
router.route('/pathsCourses').get(GetPAllathsCourses)
router.route('/paths').get(GetAllPaths)
router.route('/').post(verfiyTokenIsAdmin,NewCourse)
//All courses based on Path " params  "id""
router.route('/pathcourses/:id').get(GetAllPathCoursess)

//below For user Path
router.route('/:id').get(GetPathCourses).delete(verfiyTokenIsAdmin,DeleteCourse)
router.route('/usercompleted/:id').get(GetCompletedCourses)
// router.route('/')
router.route('/path').post(CraetePath).put(AddCourseToPath)
router.route('/completedcourse').put(addCompletedCourse)
// router.route('/path/add').post(AddCourseToPath)
module.exports = router