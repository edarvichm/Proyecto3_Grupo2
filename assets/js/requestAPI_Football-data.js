console.log('requestAPI_Football-data.js cargado')
// import axios from 'axios'
// export
// axios.defaults.headers.common['User-Agent'] = 'MiApp/1.0'
// import rp from 'request-promise'
const apiKey = '66c89d5ac62549d18b5ba92f5b14844d'

const getLeagueSeasons = async (league) => {
  try {
    axios
      .get(
        `http://api-football-standings.azharimm.dev/leagues/${league}/seasons`,
        {}
      )
      .then((response) => {
        console.log(response.data)
        //enviar response a una función
        //nombrefuncion(response.data)
      })
  } catch (error) {
    console.log(error)
  }
}
getLeagueSeasons('eng.1')
