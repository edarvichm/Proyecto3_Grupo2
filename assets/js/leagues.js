import { getLeageStandings } from './requestAPI_getLeageStandings.js'

const getDataLeagues = async () => {
  const url = 'https://api-football-standings.azharimm.dev/leagues'

  const dataJson = await fetch(url)

  const dataObj = await dataJson.json()

  if (dataObj.status == true) {
    return dataObj.data
  }

  return []
}

const addDataSelect = async (data) => {
  data.forEach((team) => {
    createOption(team.id, team.name)
  })
}

const createOption = (id, name) => {
  const select = document.getElementById('select')

  select.innerHTML += `<option value="${id}">${name}</option>`
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
  const getData = await getDataLocalStorage()

  if (getData.length > 0) {
    return getData.filter((data) => data.id == id)[0]
  }
}

const addDataToHtml = async (data) => {
  const cardBody = document.getElementById('data')

  cardBody.innerHTML = `

      <img src="${data.logos.light}" class="card-img-top" style="height: 300px; width: 300px;"></img>

      <div class="card-body">
        <h5 class="card-title">${data.name}</h5>
        <p class="card-text">${data.abbr}.</p>
        <button id="Temporadas" class="btn btn-outline-success">Temporadas</button>
      </div>
  `

  const button = document.getElementById('Temporadas')
  button.addEventListener('click', getLeageStandings)
}

const goToAction = async (id) => {
  alert(id)
}

const selectLeague = async () => {
  const selectElement = document.getElementById('select')
  const id = selectElement.value

  const dataById = await getDataSelectByID(id)

  await addDataToHtml(dataById)
}

const selectElement = document.getElementById('select')
selectElement.addEventListener('change', selectLeague)

const main = async () => {
  const dataApi = await getDataLeagues()

  if (dataApi.length > 0) {
    await saveLocalStorage(dataApi)
    await addDataSelect(dataApi)
  }
}

main()
