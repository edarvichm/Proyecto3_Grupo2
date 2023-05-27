console.log('requestAPI_Football-data.js cargado')
import { drawInfo } from './drawInfo.js'
// import axios from 'axios'
// export
// axios.defaults.headers.common['User-Agent'] = 'MiApp/1.0'
// import rp from 'request-promise'
const apiKey = '66c89d5ac62549d18b5ba92f5b14844d'

const getLeageSeasons = async (leage) => {
  try {
    const response = await axios.get(
      `http://api-football-standings.azharimm.dev/leagues/${leage}/seasons`
    )
    if (response.status === 200) {
      console.log(response.data.data)
      //enviar response a una función
      const leageSeasons = document.getElementById('leageSeasons')
      drawInfo(response.data.data.seasons, leageSeasons)
    }
  } catch (error) {
    console.log(error)
  }
}
getLeageSeasons('eng.1')
