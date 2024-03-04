const express = require('express')
const dotenv = require('dotenv').config()
const connection = require('../backend/db/db')
const port = process.env.port
const colors = require('colors')
const {errorhandler} = require('./middleware/errormiddleware')
const app = express()
connection()

// middleware for accepting body data

app.use(express.json())
app.use(express.urlencoded({extended : false}))


app.use('/api/users/' , require('./routes/userroute'))
app.use('/api/goals/' , require('./routes/goalsroute'))

// error handler
// app.use(errorhandler)

// app.use(errorhandler)

app.listen(port , () => console.log(`server is listening to port ${port}`))

