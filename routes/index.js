var express = require('express');
var router = express.Router();

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


router.get('/gamestest2', function(request, response) {

    response.render('authenticated/gametest2')
});


router.get('/gamestest3', function(request, response) {

    response.render('authenticated/gametest3')
});


module.exports = router;
