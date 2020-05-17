function reloadGameState(game_id){
  console.log(game_id)

  for(i = 1; i < 39; i++){
    var element = document.getElementById(i);
    var source = element.src;

    getGameState(i, source, game_id);
  }
}


function updateGameState(mapId, playerId, armies, game_id, src){
  console.log(game_id);
  var owner_column = ("t" + mapId + "_owner");
  var armies_column = ("t" + mapId + "_armies");


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
      .then(response => console.log(response.text()))
      .then(
        getGameState(mapId, src, game_id)
      )
      .catch(error => console.log(error))
}


function getGameState(mapId, src, game_id){
  var owner = "t" +mapId+ "_owner";
  var armies = "t" +mapId+ "_armies";
  console.log(game_id);

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


// function getGameState(mapId, playerId, armies, src){
// function getGameState(mapId, src, game_id){
//   var owner = "t" +mapId+ "_owner";
//   var armies = "t" +mapId+ "_armies";
//
//   fetch('/games/gameState',
//       { method: 'PUT',
//         body: JSON.stringify({game_id}),
//         headers: {
//         'Content-Type': 'application/json'
//       }})
//       .then(response => response.json())
//       .then(data =>
//
//         updateImage(mapId, data.game_state[owner], data.game_state[armies], src)
//       )
//       .catch(error => console.log(error))
// }



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




function updateTerritory(mapId, playerId, armies, game_id, src){
    // this gets called when territory is clicked
    //call game logic functions
    // if shit needs to be update, call get/update game state

  updateGameState(mapId, playerId, armies, game_id, src)
}






function getBasePath(src) {

  var subPath = src.substring(
      src.indexOf("map") - 1,
      src.lastIndexOf("_")
  );

  return subPath;
}



// function showArmies(mapId, armies){
//   if (armies != 0){
//     var br = "<br/>";
//     var text =  document.getElementById("div"+mapId);
//     // text.innerHTML = "Owned by Player " + playerId + br + "Armies: " + armies;
//
//     text.innerHTML = armies;
//   }
//
// }





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
