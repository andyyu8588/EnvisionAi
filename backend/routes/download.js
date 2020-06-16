const express = require('express')
const path = require('path')

const router = express.Router()

router.get('/', (req, res, next) => {
    if (req) {
        res.setHeader('Content-Disposition', 'attachement; filename=download.rar')
        res.status(200).sendFile('app.rar', {root: path.resolve(__dirname, '..')})
    } else {
        res.status(404)
    }
})

module.exports = router