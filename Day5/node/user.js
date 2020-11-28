const express = require('express')
const router = express.Router()

router.get('/list',((req, res) => {
    res.send('111')
}))

module.exports = router