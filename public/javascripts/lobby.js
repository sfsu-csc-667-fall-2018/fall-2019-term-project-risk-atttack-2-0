function listGames(user){
  console.log(user);

  fetch('/games/getUserGames?user=' + user,
      {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json'
          }
      })
      .then(response => response.json())
      .then(data =>
          data.forEach(function(obj){
            gameInfoHtml(obj.id, obj.name, obj.createdat, user)
          })
      )
      .catch(error => console.log(error))

}


function gameInfoHtml(id, name, createdat, user){
  var game_list =  document.getElementById("gameBox");

  var p = document.createElement('p')
  p.innerHTML =
  `<a href="/games/gameState?id=${id}&username=${user}">Name: ${name}</a>`;

  game_list.appendChild(p);

}
