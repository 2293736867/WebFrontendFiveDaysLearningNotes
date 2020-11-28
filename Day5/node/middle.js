const express=require('express')
const app=express()
app.listen(8080)

app.use('/list',((req, res,next) => {
    if(req.query.username === 'aa')
    {
        next()
    }
    else
        res.send('请输入用户名aa')
}))

app.get('/list',((req, res) => {
    res.send('cccc')
}))