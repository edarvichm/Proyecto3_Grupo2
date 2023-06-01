export const drawInfo = (data, contenedor) => {
  data.forEach((elemento) => {
    contenedor.innerHTML += `
            <div>
              <p><span class="fw-bold">Temporada</span>: ${elemento.displayName}</p>
              <p><span class="fw">Fecha Término</span>: ${elemento.endDate}</p>
              <p><span class="fw">Fecha Inicio</span>: ${elemento.startDate}</p>
            </div>
            `
  })
}
