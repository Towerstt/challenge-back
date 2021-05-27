const mongoose = require('mongoose')
const usersSchema = new mongoose.Schema({
    description : {
        type : String,
        minLength : 1,
        maxLength : 100,
        required : true
    },
    joined : {
        type : String,
        default : Date.now,
        required : true
    },
    location : {
        type : String,
        minLength : 1,
        required : true
    },
    mail : {
        type : String,
        match : /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
        maxLength : 100,
        required : true
    },
    password : {
        type : String,
        minLength : 1,
        required : true
    },
    userId : {
        type : Number,
        minLength : 1,
        required : true
    },
    userName : {
        type : String,
        minLength : 5,
        maxLength : 100,
        required : true
    },
    userNickname : {
        type : String,
        minLength : 5,
        maxLength : 50,
        //match : /^@.*/,
        required : true
    },
    userPic : {
        type : String,
        match : /^http.:\/\/.*\..*/gm,
        required : true
    },
    work : {
        type : String,
        minLength : 5,
        maxLength : 100,
        required : true
    }
})

const model = mongoose.model('users', usersSchema)
module.exports = model