
const express = require('express')
const dotenv = require('dotenv').config()
const app = express()


port = process.env.port




app.listen(port , () => console.log(`server is listening to port ${port}`))

