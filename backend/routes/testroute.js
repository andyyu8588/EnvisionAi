const express = require('express')
const path = require('path')

const router = express.Router()

router.get('/', (req, res, next) => {
    if (req) {
        res.status(200).sendFile('test.html', {root: path.resolve(__dirname, '..', 'testPage')})
    } else {
        res.status(404)
    }
})

module.exports = router