console.log('requestAPI_Football-data.js cargado')
// import axios from 'axios'
// export
// axios.defaults.headers.common['User-Agent'] = 'MiApp/1.0'
// import rp from 'request-promise'
const apiKey = '66c89d5ac62549d18b5ba92f5b14844d'
const makeRequest = async () => {
  try {
    // const respuesta = await fetch(
    //   'https://api.football-data.org/v4/matches',
    //   { mode: 'cors' },
    //   {
    //     headers: {
    //       'Content-type': 'application/json',
    //       Origin: 'https://localhost',
    //       'X-Auth-Token': '66c89d5ac62549d18b5ba92f5b14844d',
    //       'X-Authenticated-Client': 'Jimbo Jones',
    //       credentials: 'include',
    //       'X-API-Version': 'v4',
    //       'Access-Control-Allow-Origin': '*',
    //     },
    //   }
    // )
    // const data = await response.json()

    axios
      .get('https://api.football-data.org/v4/matches', {
        headers: {
          'X-Auth-Token': apiKey,
          credentials: 'include',
          mode: 'no-cors',
          // 'Access-Control-Allow-Origin': '*',
        },
      })
      .then((response) => {
        console.log(response.data)
      })

    if (!response.ok) {
      throw new Error('Error en la solicitud')
    }

    // console.log(data)
    // })
    // if (respuesta.status === 200) {
    //   const datos = respuesta.data
    //   return datos
    // }
  } catch (error) {
    console.log(error)
  }
}
makeRequest()
