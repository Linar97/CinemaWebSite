const express = require("express")
const router = express.Router()
const subscriptionBL = require("../BL/subscription")

router.get("", async (req, res) => {
    try {
        if (req.query.movieId) {
            const suscriptionsByMovie = await subscriptionBL.getSubscriptionsByType(req.query.movieId, "movieId")
            res.status(200).json(suscriptionsByMovie)
        } else {
            if (req.query.memberId) {
                const suscriptionsByMember = await subscriptionBL.getSubscriptionsByType(req.query.memberId, "memberId")
                res.status(200).json(suscriptionsByMember)
            } else
                res.status(500).json({ msg: "no parameters" })
        }

    } catch (err) {
        res.status(500).json({ msg: err })
    }
})

router.post("/", async (req, res) => {
    try {
        const response = await subscriptionBL.createSubscription(req.body)
        if (response === "created")
            res.status(200).json({ msg: "created" })
        else
            res.status(500).json({ msg: response })
    } catch (err) {
        res.status(500).json({ msg: err })
    }
})

module.exports = router