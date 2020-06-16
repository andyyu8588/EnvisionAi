const express = require('express')
const path = require('path')

const router = express.Router()

router.get('/', (req, res, next) => {
    if (req) {
        res.status(200).sendFile('app.rar', {root: path.resolve(__dirname, '..')})
    } else {
        res.status(404)
    }
})

module.exports = router