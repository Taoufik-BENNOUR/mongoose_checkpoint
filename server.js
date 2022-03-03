const express = require('express')
const connectDB = require('./config/connectDB')
const personRoute = require("./routes/personRoute")
//create port
const port = 8000

//Local middleeware
const logger = (req,res,next)=>{
    true ? next() : res.send('blocked')
}
//connect to the DB
connectDB()

const app = express()
//Parsing data 
app.use(express.json())
//Apply middleware
app.use(logger)
app.use('/',personRoute)
//run the server
app.listen(port,(err)=>{
    err?console.log('connection to the server failed'):
    console.log(`Service is running on ${port}`)
})