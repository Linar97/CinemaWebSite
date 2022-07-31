const memberModel = require("../models/member")

const getMembers = () => {
    return new Promise((resole, reject) => {
        memberModel.find({}, (err, data) => {
            err && reject(err)
            data && resole(data)
        })
    })
}

const updateMember = (id, member) => {
    return new Promise((resolve, reject) => {
        memberModel.findByIdAndUpdate(id, member, err => {
            reject(err)
        })
        resolve("updated")
    })
}

const addMember = (member) => {
    return new Promise((resolve, reject) => {
        const newMember = new memberModel(member)
        newMember.save(err => {
            err && reject(err)
        })
        resolve("created")
    })
}

const deleteMember = (id) => {
    return new Promise((resolve, reject) => {
        memberModel.findByIdAndDelete(id, err => {
            err && reject(err)
        })
        resolve("deleted")
    })
}

module.exports = {getMembers, updateMember, addMember, deleteMember}