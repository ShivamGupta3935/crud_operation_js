require('dotenv').config()
const express = require('express')

const cors = require('cors')

const connectToDb = require("./config/db")
const app = express()

//express middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())


//connect to mongodb
connectToDb();

const userRoutes = require('./routes/userRoutes.js')

app.use('/',userRoutes)

module.exports=app