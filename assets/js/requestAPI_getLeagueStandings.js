// console.log('requestAPI_Football-data.js cargado')
import { graph } from './graph.js'

export const getLeagueStandings = async (idSelected) => {
  // let league = document.getElementById('listTeam')
  let year = document.getElementById('year')
  try {
    const response = await axios.get(
      `https://api-football-standings.azharimm.dev/leagues/${idSelected}/standings?season=${year.value}&sort=asc`
    )
    if (response.status === 200) {
      // console.log(response.data.data)
      
      // container donde va el grafico
      const container = document.getElementById('leagueStandingGraph')
      
      console.log(response.data.data)
      //enviar response a una función
      graph(response.data.data, container)
    }
  } catch (error) {
    console.log(error)
  }
}
// getLeagueStandings('eng.1', 2022)

export const getLeagueTable = async (idSelected) => {
  
}