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

module.exports = router;
