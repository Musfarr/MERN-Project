const jwt = require("jsonwebtoken")
const bcrypt = require('bcryptjs')
const AsyncHandler = require("express-async-handler")
const usermodel = require("../models/usermodel")



const Getuser = AsyncHandler(async(req , res) => {
    res.json({msg : "ppppp"})
}
)

const Registeruser = AsyncHandler(async(req , res) => {
    const {email , password , name} = req.body
    

    //if empty fields
    if(!email || !password || !name) {
        throw new Error('Incomplete field ')
    }

    //findone function to find already exist in DB
    const userExist = usermodel.findOne({email})
    if(userExist) {
        res.status(400)
        throw new Error('User Already Exists')
    }

    //password Encryption
    const salt = await bcrypt.genSalt(10)
    const HashPass = await bcrypt.hash(password , salt)

    //creating a user 
    const user = await usermodel.Create({
        name,
        email,
        password : HashPass
    })

    //if user success then message 
    if(user){
        res.status(201).json({
            id : user.id,
            name : user.name ,
            email : user.email ,
            password : user.password
        })
    }
    else{
        res.status(200).json({msg : "invalid data"})
    }

})

const Updateuser = AsyncHandler(async(req , res) => {

    res.json({msg : "pppsssp"})
})


const Deleteuser = AsyncHandler(async(req , res) => {

    res.json({msg : "ppsssspp"})
})


module.exports = {Getuser , Registeruser , Updateuser , Deleteuser}