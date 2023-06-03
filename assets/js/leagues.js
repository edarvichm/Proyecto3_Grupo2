import { getLeagueStandings } from './requestAPI_getLeagueStandings.js'

let idSelected = ''

// LLAMADO A LA API
const getDataLeagues = async () => {
  const url = 'https://api-football-standings.azharimm.dev/leagues'

  const dataJson = await fetch(url)

  const dataObj = await dataJson.json()

  // RETORNAMOS LOS DATOS OBTENIDOS
  if (dataObj.status == true) {
    return dataObj.data
  } else {
    console.error('No se pudo obtener la  data');
  }

  return []
}

const addDataSelect = async (data) => {
  data.forEach((team) => {
    createOption(team.id, team.name)
  })

  // Obtén una lista de referencias a todos los botones
  const botones = document.querySelectorAll('.league')

  // console.log(botones)

  botones.forEach((boton) => {
    boton.addEventListener('click', (event) => {
      const idBoton = event.target.id
      selectLeague(idBoton)
    })
  })
}

const createOption = (id, name) => {
  const select = document.getElementById('listTeam')

  select.innerHTML += `<li class="league-name"><button class="league" type="button" id="${id}">${name}</button></li>`
}

const saveLocalStorage = async (data) => {
  const stringifyData = JSON.stringify(data)
  localStorage.setItem('data', stringifyData)
}

const getDataLocalStorage = () => {
  const dataStringifyLocalStorage = localStorage.getItem('data')

  if (dataStringifyLocalStorage.length > 0) {
    return JSON.parse(dataStringifyLocalStorage)
  }

  return []
}

const getDataSelectByID = async (id) => {

  const getData = await getDataLocalStorage();

  console.log('el getData: ' + getData)

  // console.log('el getData: ' + getData)

  if (getData.length > 0) {
    return getData.filter((data) => data.id == id)[0];
  }
}

const addDataToHtml = async (data) => {

  const cardBody = document.getElementById('data')

  cardBody.innerHTML = `
      <img src="${data.logos.light}" class="card-img-top"></img>

      <div class="card-body">
        <h5 class="card-title">${data.name}</h5>
      </div>
  `

  getLeagueStandings(idSelected);
  //const button = document.getElementById('temporadas')
  //button.addEventListener('click', getLeagueStandings(idSelected))
}

const selectLeague = async (id) => {
  // const selectElement = document.getElementById('listTeam')
  idSelected = id

  const dataById = await getDataSelectByID(id)

  // console.log('mandamos la data: ' + id)

  await addDataToHtml(dataById)
}

// const selectElement = document.getElementById('listTeam')
// selectElement.addEventListener('click', selectLeague)


// LLAMADO DATA DE LA API LEAGUE QUE ENLISTA LOS NOMBRES DE LAS LIGAS
const main = async () => {
  const dataApi = await getDataLeagues()

  // GUARDAMOS LA DATA OBTENIDA
  if (dataApi.length > 0) {
    await saveLocalStorage(dataApi)
    await addDataSelect(dataApi)
  }
}

main()
