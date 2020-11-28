const mysql = require('mysql')
const pool = mysql.createPool({
    host:'127.0.0.1',
    port:3306,
    user:'root',
    password:'123456',
    database:'tedu'
})

pool.query('select * from emp where eid=1',(err,result)=>{
    if(err) throw err
    console.log(result)
})

// pool.query('delete from emp where eid=?',['5'],(err,result)=>{
//     if(err) throw err
//     console.log(result)
// })

pool.query('insert into emp values(?,?,?,?,?,?)',[null,'dongdong',0,'1991-1-5',10000,10],(err,result)=>{
    if(err) throw err
    console.log(result)
})