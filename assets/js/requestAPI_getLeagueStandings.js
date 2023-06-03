// console.log('requestAPI_Football-data.js cargado')
import { graph } from './graph.js'
import { positionTable } from './positionTable.js'

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
      const table = document.getElementById('position')
      
      console.log(response.data.data)
      //enviar response a la función graph para crear el gráfico
      graph(response.data.data, container)
      //enviar response a la función positionTable para crear la tabla de posiciones
      positionTable(response.data.data, table)
    }

  } catch (error) {
    console.log(error)
  }
}
// getLeagueStandings('eng.1', 2022)

