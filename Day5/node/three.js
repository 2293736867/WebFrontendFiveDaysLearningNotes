const express = require('express')
const bodyParser = require('body-parser')
// const querystring = require('querystring')
const app = express()
app.listen(8080)
app.use(express.static('./public'))
app.use(bodyParser.urlencoded({
    extended:false
}))
app.post('/mylogin',((req, res) => {
    console.log(req.body)
    // req.on('data',(chunk)=>{
    //     let obj = querystring.parse(String(chunk))
    // })
    res.send('111')
}))