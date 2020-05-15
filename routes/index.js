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
router.get('/gamestest', function(request, response) {

    response.render('authenticated/gametest')
});



router.get('/gamestest4', function(request, response) {

    response.render('authenticated/gametest4')
});


router.put('/gamestest4', function(request, response) {
  db.any(`SELECT * from game_state where game_id = '${request.body.game_id}'`)
          .then(results => response.json(results))
          .catch(error => {
              console.log(error);
              response.json({error})
          });
});



module.exports = router;
