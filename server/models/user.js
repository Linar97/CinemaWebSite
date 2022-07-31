const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    fullName : String,
    userName : String,
    password : String
})

const userModel = mongoose.model("user", userSchema)

module.exports = userModel