const mongoose = require('mongoose')
const repliesSchema = new mongoose.Schema({
    content : {
        type : String,
        minLength : 2,
        required : true
    },
    creationDate : {
        type : String,
        default : Date.now,
        required : true
    },
    creationTime : {
        type : String,
        match : /\d{2}:\d{2}/gm,
        required : true
    },
    post : {
        type : Number,
        min : 1,
        required : true
    },
    replyId : {
        type : Number,
        min : 1,
        required : true
    },
    userId : {
        type : Number,
        min : 1,
        required : true
    }
})

const model = mongoose.model('replies', repliesSchema)

module.exports = model