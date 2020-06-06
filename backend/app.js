const express = require('express')
const app = express()

// routes 
const TfmodelRoute = require('./routes/Tfmodel')
const trendsapiRoute = require('./routes/trendsapi')

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, authorization"
    )
    res.setHeader("Access-Control-Allow-Methods", "POST, DELETE, GET, PUT")
    next()
})

app.use('/Tfmodel', TfmodelRoute)
app.use('/search', trendsapiRoute)


module.exports = app