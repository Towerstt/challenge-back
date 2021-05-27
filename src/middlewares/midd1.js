const express = require('express')
const server = express()
server.use(express.json())
server.use((request, response, next) =>{
    const method = request.method 
    console.log('MÉTODO : ', method)
    console.log('RUTA : ', request.url)
    if (method === 'POST' || method === 'PATCH'){
        console.log('BODY : ' , request.body)
    }
    
    next()
})

module.exports = server