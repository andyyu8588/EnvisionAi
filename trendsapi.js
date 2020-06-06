// trends api import
const googleTrends = require('google-trends-api')

// json console.log reader
const util = require('util')

// countries searched
let searchedCountries = ['US', 'CA', 'MX', 'RU', 'DE', 'TR', 'UK', 'FR', 'IT', 'ES', 'UA', 'PL', 'RO', 'CN', 'IN', 'ID', 'PK', 'JP', 'PH', 'VN']
// let searchedCountries = ['DE', 'TR', 'UK', 'FR']
let finalData = []

// fill up finalData
async function getData(keyword, year) {
  let startTime = new Date(`${year}-01-01`)
  let endTime = new Date(`${year}-12-31`)

  // loop through searchedCountries array
  for (let i = 0; i < 20; i++) {
    await googleTrends.interestOverTime({keyword, startTime, endTime, 
    geo: searchedCountries[i]})
    .then((res) => {
      let countryData = {
        country: searchedCountries[i],        
        keyword,
        data: []
      }
      let parsedData = JSON.parse(res)
      parsedData.default.timelineData.forEach((element) => {
        countryData.data.push({
          date: element.formattedTime,
          hasData: element.hasData[0],
          value: element.value[0]
        })
      })
      finalData.push(countryData)
      if (i == 19) {
        console.log(util.inspect(finalData, {showHidden: false, depth: null}))
      }
    })
    .catch((err) => {
      
    })
  }
}

getData('Donald Trump', 2017)