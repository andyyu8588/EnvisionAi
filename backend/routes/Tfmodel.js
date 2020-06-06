const express = require('express')
const path = require('path')

const router = express.Router()

router.get('/:param', (req, res, next) => {
    console.log(req.params.param)
    if (req.params) {
        res.status(200).sendFile(req.params.param, {root: path.resolve(__dirname, '..', 'kerasModel')})
    } else {
        res.status(404)
    }
})

module.exports = router