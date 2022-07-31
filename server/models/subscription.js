const mongoose = require("mongoose")

const subscriptionSchema = mongoose.Schema({
    movieId: String,
    memberId : String,
    date : String,
})

const subscriptionModel = mongoose.model("subscription", subscriptionSchema)

module.exports = subscriptionModel