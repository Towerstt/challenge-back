const Replies = require('../models/replies')

function getAll () {
    return Replies.find({})
}

function postNewReply (replyToCreate) {
    return Replies.create(replyToCreate)
}

function deleteByID (replyID){
    return Replies.findByIdAndRemove(replyID)
}

function updateByID(replyID, newData){
    return Replies.findByIdAndUpdate(replyID, newData)
}
module.exports = {
    getAll,
    postNewReply,
    deleteByID,
    updateByID
}