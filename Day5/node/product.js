const express = require('express')
const router = express.Router()
router.get('/list',((req, res) => {
    console.log(req.query)
    res.send(''+req.query.price)
}))

module.exports = router