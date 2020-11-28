const express = require('express')
const userRouter = require('./router/user')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({extended:false}))

app.listen(8080)
app.use('/user',userRouter)
app.use(express.static('./public'))