const express = require('express')
const app = express()
app.listen(8080)

// 
app.use(express.static('./file'))
app.use(express.static('./public'))
