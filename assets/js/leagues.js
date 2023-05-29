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
  const year = document.getElementById('year')
  // if (year.value == 'Selecciona el año de la temporada') year.value = 2022

  cardBody.innerHTML = `
      <img src="${data.logos.light}" class="card-img-top" style="height: 300px; width: 300px;"></img>

      <div class="card-body">
        <h5 class="card-title">${data.name}</h5>
        <p class="card-text">${data.abbr}.</p>
        <button onclick="getLeageStandings('${data.id}','${year.value}')" class="btn btn-outline-success">Temporadas</button>
      </div>
  `
  // Cambiar validación del año seleccionado para que no se envie el valor "selecciona el año de la temporada"
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

const main = async () => {
  const dataApi = await getDataLeagues()

  if (dataApi.length > 0) {
    await saveLocalStorage(dataApi)
    await addDataSelect(dataApi)
  }
}

main()
