// trends api import
const googleTrends = require('google-trends-api')
const express = require('express')
const router = express.Router()

// json console.log reader
const util = require('util')

let finalData = []

// countries searched
let searchedCountries = ['US', 'CA', 'MX', 'RU', 'DE', 'TR', 'UK', 'FR', 'IT', 'ES', 'UA', 'PL', 'RO', 'CN', 'IN', 'ID', 'PK', 'JP', 'PH', 'VN']
// let searchedCountries = ['DE', 'TR', 'UK', 'FR']

router.get('', (req, res, next) => {
  if (req.params) {
    getData(req.query.keyword, req.query.year).then((done) => {
      console.log(typeof(req.query.keyword))
      console.log(typeof(req.query.year))
      console.log(util.inspect(finalData, {showHidden: false, depth: null}))
      res.status(200).json({
        data: finalData
      })
    })
  } else {
    res.status(404)
  }
})

// fill up finalData
async function getData(keyword, year) {
  finalData = []
  let startTime = new Date(`${year}-01-01`)
  let endTime = new Date(`${year}-12-31`)

  // loop through searchedCountries array
  for (let i = 0; i < 20; i++) {
    await googleTrends.interestOverTime({keyword, startTime, endTime, 
    geo: 'US'})
    .then((res) => {
      let countryData = {
        country: searchedCountries[i],        
        keyword,
        data: []
      }
      let parsedData = JSON.parse(res)
      parsedData.default.timelineData.forEach((element) => {
        countryData.data.push({
          country: searchedCountries[i],
          date: element.formattedTime,
          hasData: element.hasData[0],
          value: element.value[0]
        })
      })
      finalData.push(countryData)
    })
    .catch((err) => {
      // console.log(err)
    })
  }
}

// getData('Donald Trump', '2017').then((res) => {
//   console.log(util.inspect(finalData, {showHidden: false, depth: null}))
// })

module.exports = router