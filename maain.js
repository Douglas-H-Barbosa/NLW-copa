function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
    </li>
  `
}

let delay = -1;
function createCard(date, day, games) {
  delay = delay + 1;
  return `
  <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span> </h2>
        <ul>
          ${games}
        </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML = 

    createCard(
      "24/11", 
      "Quinta", createGame('portugal', '16:00', 'Alemanha') + 
    
    createGame('camaroes', '16:00', 'brasil') + 
  
    createGame('corea', '16:00', 'switzland')) +
  
    createCard(
      "28/11", 
      "Segunda", createGame('corea', '13:00', 'switzland') + 
  
    createGame('portugal', '13:00', 'brasil') + 
  
    createGame('alemanha', '13:00', 'camaroes')) +
  
    createCard(
      "02/12", 
      "Quarta", createGame('brasil', '15:00', 'argentina') + 
  
    createGame('portugal', '15:00', 'corea') + 
  
    createGame('camaroes', '15:00', 'alemanha')) +
    
    createCard(
      "08/12", 
      "sexta", createGame('alemanha', '15:00', 'argentina') + 
  
    createGame('portugal', '15:00', 'switzland') + 
  
    createGame('camaroes', '15:00', 'corea'))
