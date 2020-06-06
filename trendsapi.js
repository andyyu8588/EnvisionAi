const googleTrends = require('google-trends-api')

const year = 2000
let data = []

const forloop = async _ => {
  console.log('Start')

  for (let index = 0; )
}

googleTrends.interestByRegion({keyword: 'George Floyd', startTime: new Date('2019-12-01'), endTime: new Date('2019-12-31'), resolution: 'COUNTRY'})
.then((res) => {
  console.log(res);
})
.catch((err) => {
  console.log(err);
})