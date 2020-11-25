const express = require('express')
const querystring = require('querystring')
const app = express()

app.listen(8080)
app.get('/list',(req,res)=>{
    res.send('hello')
})

app.get('/index',(req, res) => {
    res.send('<h2>这是首页</h2>')
})

app.get('/ccc',((req, res) => {
    res.sendFile(__dirname+'/demo.html')
}))

app.get('/detail',((req, res) => {
    res.sendFile(__dirname+'/detail.html')
}))

app.get('/study',((req, res) => {
    res.redirect('http://www.tmooc.cn')
}))

app.get('/search',((req, res) => {
    res.sendFile(__dirname+'/search.html')
}))

app.get('/mysearch',((req, res) => {
    res.send('this is product list'+req.query.keyword)
}))

app.get('/login',((req, res) => {
    res.sendFile(__dirname+'/login.html')
}))

app.post('/mylogin',((req, res) => {
    req.on('data',(chunk)=>{
        let obj = querystring.parse(String(chunk))
        res.send('登录成功,'+obj.username)
    })
}))

