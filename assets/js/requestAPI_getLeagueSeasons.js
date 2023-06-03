console.log('requestAPI_Football-data.js cargado')
import { drawInfo } from './drawInfo.js'
// import axios from 'axios'
// export
// axios.defaults.headers.common['User-Agent'] = 'MiApp/1.0'
// import rp from 'request-promise'
const apiKey = '66c89d5ac62549d18b5ba92f5b14844d'

const getLeagueSeasons = async (league) => {
  try {
    const response = await axios.get(
      `https://api-football-standings.azharimm.dev/leagues/${league}/seasons`
    )
    if (response.status === 200) {
      console.log(response.data)
      //enviar response a una función
      const leagueSeasons = document.getElementById('leagueSeasons')
      drawInfo(response.data.data.seasons, leagueSeasons)
    }
  } catch (error) {
    console.log(error)
  }
}
getLeagueSeasons('eng.1')
