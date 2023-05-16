import { makeRequest } from './requestAPI_Football-data.js'
const req = makeRequest('http://api.football-data.org/v4/competitions/PL')
console.log('req' + req)
