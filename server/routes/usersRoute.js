const { json } = require("express")
const express =require("express")
const router = express.Router()
const userBL = require("../BL/user")

const getUsersFromApi = async (req, res, next) => {
    try{
        const users = await userBL.getUsers()
        if(users.length){
            next()
        }
        else{
            await userBL.getUsersFromApi()
            next()
        }
    } catch(err){
        console.log(err)
    }
} 

router.get("/:username", getUsersFromApi, async (req, res) => {
    try{
        const user = await userBL.getUserByUsername(req.params.username)
        if(!user)
            res.status(404).json({msg: "userName not found"})
        else{
            res.status(200).json(user)
        }

    }catch(err){
        res.status(500).json({msg: err})
    }
})


module.exports = router