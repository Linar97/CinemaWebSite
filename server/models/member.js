const mongoose = require("mongoose")

const memberSchema = mongoose.Schema({
    name: String,
    email : String,
    city : String,
})

const memberModel = mongoose.model("member", memberSchema)

module.exports = memberModel