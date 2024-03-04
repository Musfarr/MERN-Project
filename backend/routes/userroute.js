const express = require("express")
const {Getuser , Registeruser , Updateuser , Deleteuser} = require('../controllers/usercontroller') 

const router = express.Router()

router.post('/' ,Registeruser)
router.post('/login' ,Getuser)
router.post('/me' ,Updateuser)
// router.route('/me')

module.exports = router