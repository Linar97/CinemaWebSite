const axios = require("axios")
const userModel = require("../models/user")

const getUsers = () => {
    return new Promise((resolve, reject) => {
        userModel.find({}, (err, data) => {
            if(err){
                reject(err)
            } else{
                resolve(data)
            }
        })
    })
}

const getUserByUsername = (username) => {
    return new Promise((resole, reject) => {
        userModel.find({userName : username}, (err, data) => {
            err && reject(err)
            data && resole(data)
        })
    })
}

const getUsersFromApi = async () => {
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/users")
        data.forEach(user => {
            const newUser = new userModel({
                fullName : user.name,
                userName : user.username,
                password : user.username
            })
            newUser.save(err => {
                err && console.log(err)
            })
        })
}

module.exports = {getUsersFromApi, getUsers, getUserByUsername}