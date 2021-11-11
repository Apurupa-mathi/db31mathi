const mongoose = require("mongoose")
const dogSchema = mongoose.Schema({
breed: String,
gender: String,
age: Number
})
module.exports = mongoose.model("dog",
dogSchema)
