const express = require('express')
const posts = require('../usecases/posts')
const router = express.Router()
router.use(express.json())

router.get('/', async (request, response) =>{
    try{
        const allPosts = await posts.getAll()

        response.json({
            success : true,
            msj : 'All posts got',
            data : {
                posts : allPosts
            }
        })
    }
    catch (error){
        response.status(400)
        response.json({
            success : false,
            msj : 'Cannot got posts',
            error : error.message
        })
    }
})

router.get('/:id', async (request, response) =>{
    try{
        const postID = request.url.replace('/','')
        const allPosts = await posts.getById(postID)

        response.json({
            success : true,
            msj : 'All posts got',
            data : {
                posts : allPosts
            }
        })
    }
    catch (error){
        response.status(400)
        response.json({
            success : false,
            msj : 'Cannot got posts',
            error : error.message
        })
    }
})

router.post('/', async (request, response) => {
    try{
        const postToPost = request.body

        const newPost = await posts.postNewPost(postToPost)
        response.json({
            msj: 'Post posted successfully',
            success: true,
            data: {
                postPosted: newPost
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
        const postID = request.url.replace('/','')
        const postDeleted = await posts.deleteByID(postID)
        response.json({
            success: true,
            msj: 'Post deleted successfully',
            data : postDeleted
        })
    }
    catch{
        response.json({
            success: false,
            msj: 'Post does not exist',
            error : error.message
        })
    }
})

router.patch('/:id', async (request, response) =>{
    try {
        const id = request.params
        const newData = request.body
        const postUpdated = await posts.updateByID(id, newData)
        response.json({
            success: true,
            msj: 'Post updated successfully',
            data : postUpdated
        })
    } catch (error) {
        response.json({
            success: false,
            msj: 'Post could not be updated',
            error : error.message
        })
    }    
})


module.exports = router