const experss =require('express')
const router = experss.Router()

const { register, signIn, GetUserInfo, GetAllusers } = require('../Controllers/UserController')
 
router.route('/all').get(GetAllusers)

router.route("/:id").get(GetUserInfo)
router.route("/login").post(signIn)
router.route("/").post(register)
module.exports = router