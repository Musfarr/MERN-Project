const express = require('express')
const mongoose = require('mongoose')



const usermodel = mongoose.Schema({

    name : {
        type : String,
        required : [true , "please add all the fields" ]
    },
    email : {
        type : String,
        required : [true , "please add all the fields" ]
    },
     password : {
        type : String,
        required : [true , "please add all the fields" ]
    }
    },
    
    {
    timestamps :true
    })



module.exports = mongoose.model("user" , usermodel)