var game_id = 1;

function reloadGameState(){

  for(i = 1; i < 39; i++){
    var element = document.getElementById(i);
    var source = element.src;

    getGameState(i, source);
  }
}


function updateGameState(mapId, playerId, armies, src){

  var value = (playerId != 0) ? playerId : armies;
  var column = (playerId != 0) ? ("t" + mapId + "_owner") : ("t" + mapId + "_armies");

  fetch('/gamestest4',
      {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body:JSON.stringify({
            game_id: game_id,
            column: column,
            value: value
          })
      })
      .then(response => console.log(response.text()))
      .then(data =>
        getGameState(mapId, src)
      )
      .catch(error => console.log(error))
}


// function getGameState(mapId, playerId, armies, src){
function getGameState(mapId, src){
  var owner = "t" +mapId+ "_owner";
  var armies = "t" +mapId+ "_armies";

  fetch('/gamestest4',
      { method: 'PUT',
        body: JSON.stringify({game_id}),
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

  if (armies != 0){
    var text =  document.getElementById("div"+mapId);
    text.innerHTML = armies;
  }
}




function updateTerritory(mapId, playerId, armies, src){
    // this gets called when territory is clicked
    //call game logic functions
    // if shit needs to be update, call get/update game state

  updateGameState(mapId, playerId, armies, src)
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
