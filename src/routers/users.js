const express = require('express')
const users = require('../usecases/users')
const router = express.Router()
router.use(express.json())

router.get('/', async (request, response) =>{
    try{
        const allUsers = await users.getAll()

        response.json({
            success : true,
            msj : 'All users got',
            data : {
                users : allUsers
            }
        })
    }
    catch (error){
        response.status(400)
        response.json({
            success : false,
            msj : 'Cannot got users',
            error : error.message
        })
    }
})

router.post('/', async (request, response) => {
    try{
        const userToPost = request.body

        const newUser = await users.signUp(userToPost)
        response.json({
            msj: 'User posted successfully',
            success: true,
            data: {
                userPosted: newUser
            }
        })}
    catch (error){
        response.status(404)
        response.json({
            msj : "Unavailable to post",
            success : false,
            error : error.message
        })
    }
})

router.delete('/:id', async (request, response) => {
    try{
        const userID = request.url.replace('/','')
        const userDeleted = await users.deleteByID(userID)
        response.json({
            success: true,
            msj: 'User deleted successfully',
            data : userDeleted
        })
    }
    catch{
        response.json({
            success: false,
            msj: 'User does not exist',
            error : error.message
        })
    }
})

router.patch('/:id', async (request, response) =>{
    try {
        const id = request.params
        const newData = request.body
        const userUpdated = await users.updateByID(id, newData)
        response.json({
            success: true,
            msj: 'User updated successfully',
            data : userUpdated
        })
    } catch (error) {
        response.json({
            success: false,
            msj: 'User could not be updated',
            error : error.message
        })
    }    
})


module.exports = router