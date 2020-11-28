const express = require('express')
const pool = require('../pool')
const r = express.Router()

r.post('/myreg',((req, res) => {
    let obj = req.body
    if(!obj.uname){
        res.send({code:401,msg:'username required'})
        return
    }
    if(!obj.upwd){
        res.send({code:402,msg:'password required'})
        return
    }
    if(!obj.email){
        res.send({code:403,msg:'email required'})
        return
    }
    if(!obj.phone){
        res.send({code:404,msg:'phone required'})
        return
    }
    pool.query('insert into xz_user set ? ',[obj],(err,result)=>{
        if(err) throw err
        console.log(result)
        res.send({code:200,msg:'reg success'})
    })
}))

r.post('/login',((req, res) => {
    let obj = req.body
    if(!obj.uname) {
        res.send({code:401,msg:'username required'})
        return
    }
    if(!obj.upwd){
        res.send({code:402,msg:'password required'})
        return
    }
    pool.query('select * from xz_user where uname = ? and upwd = ?',[obj.uname,obj.upwd],(err,result)=>{
        if(err) throw err
        if(result.length === 0)
            res.send({code:301,msg:'login err'})
        else
            res.send({code:200,msg:'login success'})
    })
}))

r.get('/update',((req, res) => {
    let obj = req.query
    let i = 400
    for(let k in obj){
        ++i
        if(!obj[k]){
            res.send({code:i,msg:k+' required'})
            return
        }
    }
    pool.query('update xz_user set ? where uid=?',[obj,obj.uid],(err,result)=>{
        if(err) throw err
        if(result.affectedRows === 0)
            res.send({code:301,msg:'修改失败'})
        else
            res.send({code:200,msg:'修改成功'})
    })
}))

module.exports = r
