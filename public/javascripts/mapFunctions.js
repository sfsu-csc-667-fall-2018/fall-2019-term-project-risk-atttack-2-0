function playerName(name){
  var pname = document.getElementById("pname");
  pname.innerHTML = name;
}



function reloadGameState(game_id){
  console.log(game_id)

  for(i = 1; i < 39; i++){
    var element = document.getElementById(i);
    var source = element.src;

    getGameState(i, source, game_id);
  }
}



function getGameInfo(game_id){
  fetch('/games/getGameInfo?id=' + game_id,
      {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json'
          }
      })
      .then(response => response.json())
      .then(data =>  findGameUsers(data))
      .catch(error => console.log(error))
}



function findGameUsers(data1){

  // this is horrible, im so sorry
  var game_name = data1.name;

  var player1 = data1.user_id1;
  var player2 = (data1.user_id2 != 0) ? data1.user_id2 : data1.user_id1;
  var player3 = (data1.user_id3 != 0) ? data1.user_id3 : data1.user_id1;
  var player4 = (data1.user_id4 != 0) ? data1.user_id4 : data1.user_id1;

  fetch('/users/findPlayersById',
      {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body:JSON.stringify({
            player1: player1,
            player2: player2,
            player3: player3,
            player4: player4
          })
      })
      .then(response => response.json())
      .then(data =>  gameInfoHtml(game_name, data1, data))
      .catch(error => console.log(error))

}





function gameInfoHtml(game_name, data1, data){
  console.log(data1);

  var player1 = data[0].username;
  var player2 = (data.length > 1) ? data[1].username : " ";
  var player3 = (data.length > 2) ? data[2].username : " ";
  var player4 = (data.length > 3) ? data[3].username : " ";


  var header =  document.getElementById("header");
  header.innerHTML = "Game Room: " + game_name;

  var players = document.getElementById("gPlayers");
  players.innerHTML = "Players: " + player1 + " " + player2 + " " + player3 + " " + player4 + " " ;

  // stuff about player colors



}






function updateGameState(data, mapId, uid, armies, game_id, src){
  console.log(game_id);
  var owner_column = ("t" + mapId + "_owner");
  var armies_column = ("t" + mapId + "_armies");

  var playerId;
  console.log(data);


  if (uid === data.user_id1){
    playerId = 1;
  } else if (uid === data.user_id2) {
    playerId = 2;
  } else if (uid === data.user_id3) {
    playerId = 3;
  }else if (uid === data.user_id4) {
    playerId = 4;
  }


  console.log(playerId);



  fetch('/games/gameState',
      {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body:JSON.stringify({
            game_id: game_id,
            owner_column: owner_column,
            armies_column: armies_column,
            playerId: playerId,
            armies: armies
          })
      })
      .then(response => response.json())
      .then(data =>
        getGameState(mapId, src, data.game_id)
      )
      .catch(error => console.log(error))
}


function getGameState(mapId, src, game_id){
  var owner = "t" +mapId+ "_owner";
  var armies = "t" +mapId+ "_armies";

  fetch('/games/getgameState?id='+game_id,
      { method: 'GET',
        headers: {
        'Content-Type': 'application/json'
      }})
      .then(response => response.json())
      .then(data =>

        updateImage(mapId, data.game_state[owner], data.game_state[armies], src)
      )
      .catch(error => console.log(error))
}




function updateImage(mapId, ownerId, armies, src){
  var basePath = getBasePath(src);
  var image =  document.getElementById(mapId);

  image.src = basePath + playerColor(ownerId);

  // var text =  document.getElementById("div"+mapId);
  // text.innerHTML = armies;

  if (armies != 0){
    var text =  document.getElementById("div"+mapId);
    text.innerHTML = armies;
  }
}




function updateTerritory(mapId, uid, armies, game_id, src){
    // this gets called when territory is clicked
    //call game logic functions
    // if shit needs to be update, call get/update game state


    fetch('/games/getGameInfo?id=' + game_id,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data =>
           updateGameState(data, mapId, uid, armies, game_id, src))
          // findGameUsers(data))
        .catch(error => console.log(error))



  // updateGameState(mapId, playerId, armies, game_id, src)
}






function getBasePath(src) {

  var subPath = src.substring(
      src.indexOf("map") - 1,
      src.lastIndexOf("_")
  );

  return subPath;
}








function playerColor(playerId){
  var color;

  if(playerId === 0){
    color = "_white.png";

  }else if (playerId === 1){
    color = "_yellow.png";

  } else if (playerId === 2) {
    color = "_blue.png";

  } else if(playerId === 3){
    color = "_red.png";

  } else if(playerId === 4){
    color = "_green.png";
  }

  return color;
}


// SELECT *
// FROM testing
// WHERE 'foo' in (col1, col2, col3, . . . );
