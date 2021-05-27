const Users = require('../models/users')
const bcrypt = require('../lib/bcrypt')

function getAll() {
    return Users.find({})
}

async function signUp({
    description,
    joined,
    location,
    mail,
    password,
    userId,
    userName,
    userNickname,
    userPic,
    work
}) {
    const userFound = await Users.findOne({
        mail
    })

    if (userFound) {
        throw new Error('User already exists')
    }

    const encryptedPassword = await bcrypt.hash(password)
    return Users.create({
        description,
        joined,
        location,
        mail,
        password: encryptedPassword,
        userId,
        userName,
        userNickname,
        userPic,
        work
    })
}

function deleteByID(userID) {
    return Users.findByIdAndRemove(userID)
}


module.exports = {
    getAll,
    signUp,
    deleteByID
}