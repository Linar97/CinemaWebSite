const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/Sinema", () => {
    console.log("connected to db")
})