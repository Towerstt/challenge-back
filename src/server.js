const express = require('express')
const cors = require('cors')
const postRouter = require('./routers/posts')
const repliesRouter = require('./routers/replies')
const usersRouter = require('./routers/users')
const middleware = require('./middlewares/midd1')
const app = express()

app.use(cors())
app.use(middleware)
app.use('/posts', postRouter)
app.use('/replies', repliesRouter)
app.use('/users', usersRouter)

module.exports = app