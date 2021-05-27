const Posts = require('../models/posts')

function getAll () {
    return Posts.find({})
}

function getById (id) {
    return Posts.findById(id)
}

function postNewPost (postToCreate) {
    return Posts.create(postToCreate)
}

function deleteByID (postID){
    return Posts.findByIdAndRemove(postID)
}

function updateByID(postID, newData){
    return Posts.findByIdAndUpdate(postID, newData)
}
module.exports = {
    getAll,
    postNewPost,
    deleteByID,
    updateByID,
    getById
}