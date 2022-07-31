const express = require("express")
const cors = require("cors")
const usersRouter = require("../routes/usersRoute")
const movieRouter = require("../routes/moviesRoute")
const memberRouter = require("../routes/membersRoute")
const subscriptionRouter = require("../routes/subscriptionsRoute")

require("../configs/database")
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.use("/users", usersRouter)
app.use("/movies", movieRouter)
app.use("/members", memberRouter)
app.use("/subscription", subscriptionRouter)


app.listen(8000, () => {
    console.log("server is running")
})