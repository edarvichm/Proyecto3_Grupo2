console.log('requestAPI_Football-data.js cargado')
// import axios from 'axios'
export const makeRequest = async (url) => {
  try {
    const respuesta = await axios.get(url, {
      headers: {
        'X-Auth-Token': '66c89d5ac62549d18b5ba92f5b14844d',
      },
    })
    console.log(respuesta)
    if (respuesta.status === 200) {
      const datos = respuesta.data
      return datos
    }
  } catch (error) {
    throw new Error()
  }
}
