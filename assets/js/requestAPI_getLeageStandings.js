console.log('requestAPI_Football-data.js cargado')
// import { graph } from './graph.js'

const getLeageStandings = async (leage, year) => {
  leage = document.getElementById('select')
  year = document.getElementById('year')
  try {
    const response = await axios.get(
      `http://api-football-standings.azharimm.dev/leagues/${leage.value}/standings?season=${year.value}&sort=asc`
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
