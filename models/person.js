const mongoose = require('mongoose')

const personSchema = new mongoose.Schema({
    firtname:{
        type:String,
        require:true
    },
    lastName:{
        type:String,
        require:true
    },
    email:String,
    password:String,
    phone:Number
})       

module.exports = mongoose.model('Person',personSchema)