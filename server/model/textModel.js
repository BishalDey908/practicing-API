const mongoose = require("mongoose")

const textSchema = mongoose.Schema({
    "text":String
})

const textModel = new mongoose.model("textmodel",textSchema)
module.exports = textModel