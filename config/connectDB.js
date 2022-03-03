const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/mmongo'

const connectDB = async()=>{
    try {
        await mongoose.connect(url)
        console.log('connected to the DB')  
    } catch (error) {
     console.log('failed to connect',error)   
    }
}

module.exports = connectDB