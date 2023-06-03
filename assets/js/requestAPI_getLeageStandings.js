console.log('requestAPI_Football-data.js cargado')
import { graph } from './graph.js'

export const getLeageStandings = async (idSelected) => {
  // let leage = document.getElementById('listTeam')
  let year = document.getElementById('year')
  try {
    const response = await axios.get(
      `https://api-football-standings.azharimm.dev/leagues/${idSelected}/standings?season=${year.value}&sort=asc`
    )
    if (response.status === 200) {
      console.log(response.data.data)
      //enviar response a una función
      const container = document.getElementById('leageStandingGraph')
      graph(response.data.data, container)
    }
  } catch (error) {
    console.log(error)
  }
}
// getLeageStandings('eng.1', 2022)
