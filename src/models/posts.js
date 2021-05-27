const mongoose = require('mongoose')
const postSchema = new mongoose.Schema({
    content : {
        type : String,
        minLength : 2,
        required : true
    },
    coverUrl : {
        type : String,
        match : /^http.:\/\/.*\..*/gm,
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
    duration : {
        type : String,
        match : /\d+\smin read/gm,
        required : true
    },
    likes : {
        type : Number,
        min : 0,
        required : false,
    },
    postId : {
        type : Number,
        min : 1,
        required : true
    },
    tags : {
        type : [String],
        enum : ['#javaScript', '#programming', '#css', '#jQuery', '#aws', '#html'], //No estoy seguro si puede elegirse más de una
    },
    title : {
        type : String,
        minLength : 5,
        maxlength : 100,
        required : true
    },
    userId : {
        type : Number,
        min : 1,
        required : true
    }
})

const model = mongoose.model('posts', postSchema)

module.exports = model