const mongoose = require("mongoose")
const dogSchema = mongoose.Schema({
breed: String,
gender: String,
age: { type: Number, min: 1, max: 30, default: 0 },
})
module.exports = mongoose.model("dog",dogSchema)
