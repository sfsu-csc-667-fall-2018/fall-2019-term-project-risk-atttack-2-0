var express = require('express');
var router = express.Router();
var db = require('../db');


/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Express' });
});
/*router.get('/login', function(request, response) {
  response.send('respond with a resource');
  response.render('unauthenticated/login')
});*/


router.get('/gamestest4', function(request, response) {

    response.render('authenticated/gametest4')
});


router.put('/gamestest4', function(request, response) {
  const {game_id} = request.body;


  db.GameState.getGameState(game_id)
    .then(result => {
        console.log(result.game_id);
        response.json({game_state: result});
    })
    .catch(error => {
      console.log("ERROR", error);
    });
});









router.post('/gamestest4', function(request, response) {
  const {game_id} = request.body;


  db.GameState.getGameState(game_id)
    .then(result => {
        console.log("result");
        response.json({game_state: "result"});
    })
    .catch(error => {
      console.log("ERROR", error);
    });
});





module.exports = router;
