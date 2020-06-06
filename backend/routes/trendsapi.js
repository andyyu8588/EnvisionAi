// trends api import
const googleTrends = require('google-trends-api')
const express = require('express')
const router = express.Router()

// json console.log reader
const util = require('util')

let finalData = []

// countries searched
let searchedCountries = ['US', 'CA', 'MX', 'RU', 'DE', 'TR', 'GB', 'FR', 'IT', 'ES', 'UA', 'PL', 'RO', 'CN', 'IN', 'ID', 'PK', 'JP', 'PH', 'VN']

router.get('', (req, res, next) => {
  console.log('search request received')
  if (req.params) { // if there are params
    getData(req.query.keyword, req.query.year).then((done) => { // successful search with keyword and year
      console.log('results delivered')
    
    // for debugging purposes
    // console.log(util.inspect(finalData, {showHidden: false, depth: null}))

    // send back the data
      res.status(200).json({
        data: finalData
      })
    })
  } else { // wrong number of params
    res.status(404)
  }
})

// fill up finalData
async function getData(keyword, year) {
  // reset finalData
  finalData = []

  // set start and end times
  let startTime = new Date(`${year}-01-01`)
  let endTime = new Date(`${year}-12-31`)

  // loop through searchedCountries array
  for (let i = 0; i < 20; i++) {
    await googleTrends.interestOverTime({keyword, startTime, endTime, 
    geo: searchedCountries[i]})
    .then((res) => {

      // prepare countryData contianer
      let countryData = {       
        keyword,
        data: []
      }

      // parse received data
      let parsedData = JSON.parse(res)

      // we push each week to countryData
      parsedData.default.timelineData.forEach((element) => {
        countryData.data.push({
          country: searchedCountries[i],
          date: element.formattedTime,
          hasData: element.hasData[0],
          value: element.value[0]
        })
      })

      // push all the weeks to finalData
      finalData.push(countryData)
    })
    .catch((err) => {
      // console.log(err)
    })
  }

  // get worldwide data
  await googleTrends.interestOverTime({keyword, startTime, endTime})
  .then((res) => {

    // prepare countryData contianer
    let countryData = {      
      keyword,
      data: []
    }

    // parse received data
    let parsedData = JSON.parse(res)

    // we push each week to countryData
    parsedData.default.timelineData.forEach((element) => {
      countryData.data.push({
        country: 'Global',
        date: element.formattedTime,
        hasData: element.hasData[0],
        value: element.value[0]
      })
    })

    // push all the weeks to finalData
    finalData.push(countryData)
  })
  .catch((err) => {
    // console.log(err)
  })
}

module.exports = router