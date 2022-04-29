const experss =require('express')
const router = experss.Router()

const { register, signIn, GetUserInfo, GetAllusers, verfiyToken } = require('../Controllers/UserController')
 
router.route("/userToken").get(verfiyToken,(req,res)=>{
    try {
        res.json(req.user)
    } catch (error) {
        res.json(error)
    }
  })
router.route('/all').get(GetAllusers)

router.route("/:id").get(verfiyToken,GetUserInfo)
router.route("/login").post(signIn)
router.route("/").post(register)
module.exports = router