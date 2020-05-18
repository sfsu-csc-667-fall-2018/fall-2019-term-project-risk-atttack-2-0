const game_form = document.getElementById('creation-form');
const user_name = document.getElementById('playername').innerHTML;



game_form.addEventListener('submit',(e) =>{
  e.preventDefault();

  const game_name = e.target.elements.creation.value;
  const player2 = e.target.elements.player2.value;
  const player3 = e.target.elements.player3.value;
  const player4 = e.target.elements.player4.value;

  console.log(user_name);

  console.log(game_name);
  console.log(player2);
  console.log(player3);
  console.log(player4);


  fetch('/users/findGameUsers',
      {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body:JSON.stringify({
            player1: user_name,
            player2: player2,
            player3: player3,
            player4: player4
          })
      })
      .then(response => response.json())
      .then(data => setUpGame(game_name, user_name, data))
      .catch(error => console.log(error))


});




function setUpGame(game_name, user_name, data){
  console.log(data)
  console.log(data.length)
  console.log("username: ",user_name)


  var player1 = data[0].id;

  var player2 = (data.length > 1) ? data[1].id : 0;
  var player3 = (data.length > 2) ? data[2].id : 0;
  var player4 = (data.length > 3) ? data[3].id : 0;


  fetch('/games/gameSetUp',
      {
          method: 'POST',
          redirect: 'follow',
          headers: {
              'Content-Type': 'application/json',
          },
          followAllRedirects: true,
          body:JSON.stringify({
            game_name: game_name,
            username:  user_name,
            player1: player1,
            player2: player2,
            player3: player3,
            player4: player4
          })
      })
      .then(response =>(window.location.href = response.url))
      .catch(error => console.log(error))

}





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
