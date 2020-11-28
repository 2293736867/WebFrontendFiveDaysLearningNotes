const mysql = require('mysql')
const c = mysql.createConnection({
    host:'127.0.0.1',
    port:3306,
    user:'root',
    password:'123456',
    database:'tedu'
})

c.query('select * from emp',(err,result)=>{
    if(err) throw err
    console.log(result)
})
