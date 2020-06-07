const express = require('express')
const app = express()
const path = require('path')

// routes 
const TfmodelRoute = require('./routes/Tfmodel')
const denseRoute = require('./routes/densemodel')
const trendsapiRoute = require('./routes/trendsapi')
const TestRoute = require('./routes/testroute')

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
app.use('/densemodel', denseRoute)
app.use('/search', trendsapiRoute)
app.use('/home', TestRoute)

// serve angular
app.use((req, res, next) => {
  res.sendFile(express.static(path.resolve(__dirname, '..', '..', 'vision', 'dist', 'vision', 'index.html')))
})

module.exports = app