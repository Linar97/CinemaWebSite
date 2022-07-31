const express = require("express")
const router = express.Router()
const memberBL = require("../BL/member")
const subscriptionBL = require("../BL/subscription")

router.get("/", async (req, res) => {
    try{
        const Members = await memberBL.getMembers()
        res.status(200).json(Members)
    } catch(err){
        res.status(500).json({msg: err})
    }
})

router.put("/:id", async (req, res) => {
    try{
        const id = req.params.id
        const member = req.body
        const response = await memberBL.updateMember(id, member)
        if(response === "updated")
            res.status(200).json({msg: response})
        else
            res.status(500).json({msg: response})
    } catch (err) {
        res.status(500).json({msg : err})
    }
})

router.post("/", async (req, res) => {
    try{
        const response = await memberBL.addMember(req.body)
        if(response === "created")
            res.status(200).json({msg : response})
        else
            res.status(500).json({msg: err})
    } catch(err){
        res.status(500).json({msg: err})
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const response = await memberBL.deleteMember(req.params.id)
        const subscriptionsResponse = await subscriptionBL.deleteByMemberId(req.params.id)
        if (response === "deleted" && subscriptionsResponse === "deleted")
            res.status(200).json({ msg: "deleted" })
        else
            res.status(500).json({ msg: response})
    } catch (err) {
        res.status(500).json({ msg: err })
    }

})

module.exports = router

