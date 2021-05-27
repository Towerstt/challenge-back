const express = require('express')
const replies = require('../usecases/replies')
const router = express.Router()
router.use(express.json())

router.get('/', async (request, response) =>{
    try{
        const allReplies = await replies.getAll()

        response.json({
            success : true,
            msj : 'All replies got',
            data : {
                replies : allReplies
            }
        })
    }
    catch (error){
        response.status(400)
        response.json({
            success : false,
            msj : 'Cannot got replies',
            error : error.message
        })
    }
})

router.post('/', async (request, response) => {
    try{
        const replyToPost = request.body

        const newReply = await replies.postNewReply(replyToPost)
        response.json({
            msj: 'Reply posted successfully',
            success: true,
            data: {
                replyPosted: newReply
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
        const replyID = request.url.replace('/','')
        const replyDeleted = await replies.deleteByID(replyID)
        response.json({
            success: true,
            msj: 'Reply deleted successfully',
            data : replyDeleted
        })
    }
    catch{
        response.json({
            success: false,
            msj: 'Reply does not exist',
            error : error.message
        })
    }
})

router.patch('/:id', async (request, response) =>{
    try {
        const id = request.params
        const newData = request.body
        const replyUpdated = await replies.updateByID(id, newData)
        response.json({
            success: true,
            msj: 'Reply updated successfully',
            data : replyUpdated
        })
    } catch (error) {
        response.json({
            success: false,
            msj: 'Reply could not be updated',
            error : error.message
        })
    }    
})


module.exports = router