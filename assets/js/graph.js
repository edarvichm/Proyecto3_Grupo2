export const graph = (datos, contenedor) => {
  // console.log(contenedor)
  // console.log(datos.standings)
  const team = datos.standings.map((elemento) => elemento.team.name)
  const wins = datos.standings.map((elemento) => elemento.stats[7].value)
  const ties = datos.standings.map((elemento) => elemento.stats[6].value)
  const losses = datos.standings.map((elemento) => elemento.stats[1].value)
  const datosFormateados = {
    team: team,
    wins: wins,
    ties: ties,
    losses: losses,
  }

  //valida si existe grafico y lo destruye antes de crear uno nuevo
  if (Chart.getChart(contenedor)) Chart.getChart(contenedor).destroy()

  const grafico = new Chart(contenedor, {
    type: 'bar',
    data: {
      labels: datosFormateados.team,
      datasets: [
        {
          label: 'Wins',
          data: datosFormateados.wins,
          borderWidth: 1,
          borderColor: '#142274',
          backgroundColor: '#142274',
        },

        {
          label: 'Ties',
          data: datosFormateados.ties,
          borderWidth: 1,
          borderColor: 'rgb(166, 162, 162)',
          backgroundColor: 'rgb(166, 162, 162)',
        },

        {
          label: 'Losses',
          data: datosFormateados.losses,
          borderWidth: 1,
          borderColor: 'red',
          backgroundColor: 'red',
        },
      ],
    },
    options: {


      y: {
        grid: {
          drawBorder: true,
          borderWidth: 12,
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
      indexAxis: 'y',
      layout: {
        padding: {
          bottom: 100,
        },
      },
      elements: {
        bar: {
          border: 2,

        },
      },
      responsive: true,
      plugins: {
        legend: {
          position: 'right',
        },
        title: {
          display: true,
          font: {
            size: 20,
                    },
          text: datos.name + ' ' + datos.seasonDisplay,
        },
      },
    },
  })
}
