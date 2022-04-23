const experss =require('express')
const router = experss.Router()

const { register, signIn } = require('../Controllers/UserController')
 

router.route("/").post(register)
router.route("/login").post(signIn)
module.exports = router