var game_id = 1;
var game_state =[];
fetch('/gamestest4',
    { method: 'PUT',
      body: JSON.stringify({ game_id }),
      headers: {
      'Content-Type': 'application/json'
    }})
    .then(response => response.json())
    .then(data => game_state.push(data[0]))
    .catch(error => console.log(error))





function getGameState(){
  // const game_state = data;
  console.log(game_state.game_id);

}


function updateMap(mapId){
  var ownerColumn = "t" + mapId + "_owner";
  var armiesColumn = "t" + mapId + "_armies";

  console.log(game_state);
}



function updateGameState(mapId, playerId){

  fetch('/gamestest4',
      { method: 'POST',
        body: JSON.stringify({ game_id }),
        headers: {
        'Content-Type': 'application/json'
      }})
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error))
}




function getImagePath(){
  // var ownerColumn = "t" + mapId + "_owner";
  // var owner = game_state.ownerColumn;

  console.log(game_state);
}

function updateTerritory(mapId, playerId, armies){
  var br = "<br/>";
  var text =  document.getElementById("div"+mapId);
  text.innerHTML = "Owned by Player " + playerId + br + "Armies: " + armies;

  changeImage(mapId, playerId);
  // updateGameState();
}


function changeImage(mapId, playerId) {

  var image =  document.getElementById(mapId);
  image.src = changeTerritory(mapId) + playerColor(playerId);
}






function changeTerritory(mapId){
  var greenland = "/mapImages/greenland/greenland";
  var north2 = "/mapImages/northam_bottom/northAm1"
  var north1 = "/mapImages/northam_top/northAm2";
  var sAm1 = "/mapImages/sAm/sAm1";
  var sAm2 = "/mapImages/sAm/sAm2";

  var src;

    if (mapId === "img3"){
      src = greenland;

    } else if (mapId == "img1") {
      src = north1;

    } else if(mapId == "img2"){
      src = north2;

    } else if(mapId == "img4"){
      src = sAm1;

    } else if(pmapId == "img5"){
      src = sAm2;
    }

  return src;
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


// function testgetGameState(){
//   var game_id = 1;
//   var game_state;
//
//
//   fetch('/gamestest4',
//       { method: 'PUT',
//         body: JSON.stringify({ game_id }),
//         headers: {
//         'Content-Type': 'application/json'
//       }})
//       .then(response => response.json())
//       .then(data => {game_state = data[0]})
//       .catch(error => console.log(error))
// }
