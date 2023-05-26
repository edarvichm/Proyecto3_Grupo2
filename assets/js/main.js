// import { makeRequest } from './requestAPI_Football-data.js'
// const req = makeRequest('https://api.football-data.org/v4/areas/2077')
// console.log('req' + req)

const axios = require('axios')

const options = {
  method: 'GET',
  url: 'https://api-football-beta.p.rapidapi.com/timezone',
  headers: {
    'X-RapidAPI-Key': '2cc0987d65mshbc4c29913f4a50cp10c0a7jsn56dcf2d13a06',
    'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com',
  },
}

try {
  const response = await axios.request(options)
  console.log(response.data)
} catch (error) {
  console.error(error)
}
