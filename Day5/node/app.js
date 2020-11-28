const express = require('express')
const app = express()
const userRouter = require('./user.js')
const productRouter = require('./product')

app.listen(8080)
app.use('/user',userRouter)

app.use('/product/list',((req, res, next) => {
    req.query.price *= 0.9
    next()
}))

app.use('/product',productRouter)
