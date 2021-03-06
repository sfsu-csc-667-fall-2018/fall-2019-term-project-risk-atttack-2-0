const express = require('express');
const router = express.Router();
var db = require('../db');




router.post('/creategame', function(request, response) {
    var user = request.query.user;
    var gamename = request.body.name;

    db.Users.getHash(user)
      .then(result => {
        response.redirect("/games/gameStateSetUp?uid=" + result.id
          + "&gamename=" + gamename + "&username=" + user)
      })
      .catch(error => {
        console.log("ERROR", error);
      });
});



router.post('/gameSetUp', function(request, response) {
    var uid = request.body.uid;
    var name = request.body.game_name;
    var username = request.body.username;

    var player1 = request.body.player1;
    var player2 = request.body.player2;
    var player3 = request.body.player3;
    var player4 = request.body.player4;
    var players = 4;
    var password = '';

    console.log("herree: ", uid)


    db.Game.createGame(name, players, password, player1, player2, player3, player4)
      .then(result => {
          response.redirect("/games/createGameState?id="
                            + result[0].id + "&username=" + username + "&uid=" + uid );
      })
      .catch(error => {
        console.log("ERROR", error);
      });

});




router.get('/createGameState', function(request, response) {
    var uid = request.query.uid;

    var username = request.query.username;
    var game_id = request.query.id;

    console.log("here2: ", username);

    db.GameState.createGameState(game_id)
      .then(result => {
        response.redirect("/games/gameState?id=" + game_id +
                            "&username=" + username + "&uid=" + uid)
      })
      .catch(error => {
        console.log("ERROR", error);
      });
});





router.get('/gameState', function(request, response) {
    var uid = request.query.uid;

    var username = request.query.username;
    var game_id = request.query.id;

    console.log("here3: ");


    db.GameState.getGameState(game_id)
      .then(result => {
        response.render('authenticated/gameState', {game_id: game_id, username:username, uid: uid})
        response.end();
      })
      .catch(error => {
        console.log("ERROR", error);
      });

});





router.get('/getgameState', function(request, response) {
  const game_id = request.query.id;

  db.GameState.getGameState(game_id)
    .then(result => {
        response.json({game_state: result});
    })
    .catch(error => {
      console.log("ERROR", error);
    });
});




router.post('/gameState', function(request, response) {
  const {game_id, owner_column, playerId, armies_column, armies} = request.body;


  db.GameState.updateGameState(game_id, owner_column, playerId, armies_column, armies)
    .then(result => {
        response.json(result);
    })
    .catch(error => {
      console.log("ERROR", error);
    });
});


router.get('/getGameInfo', function(request, response) {
  const game_id = request.query.id;


  db.Game.getGameInfo(game_id)
    .then(result => {
        response.json(result);
    })
    .catch(error => {
      console.log("ERROR", error);
    });
});


router.get('/getUserGames', function(request, response) {
  const user = request.query.user;
  console.log("User games: ", user);


  db.Users.findByName(user)
    .then(result => {
      response.redirect("/games/returnUserGames?id=" + result[0].id)
    })
    .catch(error => {
      console.log("ERROR", error);
    });
});


router.get('/returnUserGames', function(request, response) {
  const user_id = request.query.id;

  console.log("here id: ", user_id);

  db.Game.getUserGames(user_id)
    .then(result => {
        response.json(result)
    })
    .catch(error => {
      console.log("ERROR", error);
    });
});


// router.get('/gameStateSetUp', function(request, response) {
//     var username = request.query.username;
//     var user_id1 = request.query.uid;
//     var name = request.query.gamename;
//     var players = 4;
//     var password = '';
//
//     db.Game.createGame(name, players, password, user_id1)
//       .then(result => {
//           console.log(result[0].id);
//           response.redirect("/games/creategameState?id="
//                             + result[0].id + "&username=" + username)
//       })
//       .catch(error => {
//         console.log("ERROR", error);
//       });
//
// });





/* GET users listing. */
router.get('/:id', function(request, response) {
    //response.send('respond with a resource');

    const { id } = request.params;
    response.render('authenticated/game', { id })
});




module.exports = router;
