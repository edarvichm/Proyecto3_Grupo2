export const positionTable = (table, contenedor) => {
    // Inicializamos SIEMPRE EL CONTENEDOR VACIO PARA LIMPIAR ANTES DE insertar información
    contenedor.innerHTML = '';

    const teamName = table.standings.map((elemento) => elemento.team.displayName)
    const pts = table.standings.map((elemento) => elemento.stats[3].value)
    const wins = table.standings.map((elemento) => elemento.stats[7].value)
    const ties = table.standings.map((elemento) => elemento.stats[6].value)
    const losses = table.standings.map((elemento) => elemento.stats[1].value)
    const goalFor = table.standings.map((elemento) => elemento.stats[5].value)
    const goalAgainst = table.standings.map((elemento) => elemento.stats[4].value)
    const goalDiff = table.standings.map((elemento) => elemento.stats[2].displayValue)

    // Creamos un objeto con las variables para poder guardarlo
    const equipoStats = {
        teamName: teamName,
        pts: pts,
        wins: wins,
        ties: ties,
        losses: losses,
        goalFor: goalFor,
        goalAgainst: goalAgainst,
        goalDiff: goalDiff,
    }
    
    // console.log(equipoStats)
    // equipoStats.teamName.forEach(elem =>{
        
    // })


    console.log (equipoStats.teamName);


    for(let i = 0;i<equipoStats.teamName.length;i++) {
        contenedor.innerHTML += `
        <div class="row m-0">
            <div class="col-5 ps-0">
                <p class="position-table m-0">
                    ${equipoStats.teamName[i]}
                </p>
            </div>
            <div class="col-1 p-0">
                <p class="position-table m-0">
                    ${equipoStats.pts[i]}
                </p>
            </div>
            <div class="col-1 p-0">
                <p class="position-table m-0">
                    ${equipoStats.wins[i]}
                </p>
            </div>
            <div class="col-1 p-0">
                <p class="position-table m-0">
                    ${equipoStats.ties[i]}
                </p>
            </div>
            <div class="col-1 p-0">
                <p class="position-table m-0">
                    ${equipoStats.losses[i]}
                </p>
            </div>
            <div class="col-1 p-0">
                <p class="position-table m-0">
                    ${equipoStats.goalFor[i]}
                </p>
            </div>
            <div class="col-1 p-0">
                <p class="position-table m-0">
                    ${equipoStats.goalAgainst[i]}
                </p>
            </div>
            <div class="col-1 p-0">
                <p class="position-table m-0">
                    ${equipoStats.goalDiff[i]}
                </p>
            </div>
        </div>
    `
    }



}