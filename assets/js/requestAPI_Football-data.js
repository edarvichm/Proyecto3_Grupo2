console.log('requestAPI_Football-data.js cargado')
// import axios from 'axios'
// export
// axios.defaults.headers.common['User-Agent'] = 'MiApp/1.0'
// import rp from 'request-promise'
const apiKey = '66c89d5ac62549d18b5ba92f5b14844d'
const makeRequest = async () => {
  try {
    axios
      .get('https://api-football-standings.azharimm.dev/leagues/eng.1', {})
      .then((response) => {
        console.log(response.data)
        //enviar response a una función
        //nombrefuncion(response.data)
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
