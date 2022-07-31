const subscriptionModel = require("../models/subscription")
const movieModel = require("../models/movie")
const memberModel = require("../models/member")

const getSubscriptionsByType = (id, type) => {
    return new Promise((resolve, reject) => {
        subscriptionModel.find({ [type]: id }, async (err, data) => {
            err && reject(err)
            if (data) {
                const movieWatchedDetails = await Promise.all(data.map(subscription => getDataWatchedByType(subscription, type)))
                resolve(movieWatchedDetails)
            }
        })

    })
}

const getDataWatchedByType = async (subscription, type) => {
    let item = {}
    item = type === "memberId" ? await movieModel.findById(subscription.movieId) : 
                                await memberModel.findById(subscription.memberId)
    return { item: item, date: subscription.date }
}

const createSubscription = (subscription) => {
    return new Promise((resolve, reject) => {
        const newSubscription = new subscriptionModel(subscription)
        newSubscription.save(err => {
            err && reject(err)
        })
        resolve("created")
    })
}

const deleteByMovieId = (id) => {
    return new Promise((resolve, reject) => {
        subscriptionModel.deleteMany({movieId : id}, err => {
            err && reject(err)
        })
        resolve("deleted")
    })
}

const deleteByMemberId = (id) => {
    return new Promise((resolve, reject) => {
        subscriptionModel.deleteMany({memberId : id}, err => {
            err && reject(err)
        })
        resolve("deleted")
    })
}


module.exports = { getSubscriptionsByType, createSubscription, deleteByMovieId, deleteByMemberId }