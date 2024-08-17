const mongoose = require("mongoose")

const userRegSchema = mongoose.Schema({
    username:String,
    password:String,
},{ timestamps: true })

const userRegModel = new mongoose.model("userReg",userRegSchema)

module.exports = userRegModel