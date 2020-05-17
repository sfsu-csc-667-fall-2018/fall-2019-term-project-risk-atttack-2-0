const express = require('express');
const router = express.Router();
var db = require('../db');


router.post('/creategame', function(request, response) {
    const {name} = request.body;
    var players = 4;
    var password = '';

    db.Game.createGame(name, players, password)
      .then(result => {
          console.log(result[0].id);
          response.redirect("/games/creategameState?id=" + result[0].id)
      })
      .catch(error => {
        console.log("ERROR", error);
      });
});


// need to prevent creating multiple game states per game id
router.get('/creategameState', function(request, response) {
    console.log("here 2" , request.query.id);
    var game_id = request.query.id;


    db.GameState.createGameState(game_id)
      .then(result => {
        response.redirect("/games/gameState?id=" + game_id)
      })
      .catch(error => {
        console.log("ERROR", error);
      });

});


router.get('/gameState', function(request, response) {
    console.log("here 3" , request.query.id);
    var game_id = request.query.id;


    db.GameState.getGameState(game_id)
      .then(result => {
        response.render('authenticated/gameState', {game_id: game_id})
      })
      .catch(error => {
        console.log("ERROR", error);
      });

});





router.get('/getgameState', function(request, response) {
  const game_id = request.query.id;

  console.log("here 4" , game_id);

  db.GameState.getGameState(game_id)
    .then(result => {
        response.json({game_state: result});
    })
    .catch(error => {
      console.log("ERROR", error);
    });
});




router.post('/gameState', function(request, response) {
  const {game_id, column, value} = request.body;

  console.log("Here 1", column, value, game_id);

  db.GameState.updateGameState(column, value, game_id)
      .then(response.send("Shits been updated yo "))

    // .then(result => {
    //
    //     console.log("hereeee ", result);
    //     response.json({game_state: result});
    // })
    .catch(error => {
      console.log("ERROR", error);
    });
});





/* GET users listing. */
router.get('/:id', function(request, response) {
    //response.send('respond with a resource');

    const { id } = request.params;
    response.render('authenticated/game', { id })
});




module.exports = router;
