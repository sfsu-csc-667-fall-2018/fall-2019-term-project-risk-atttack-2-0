var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/login', function(_, response) {
  //response.send('respond with a resource');
  response.render('unauthenticated/login')
});

router.get('/register', function(_, response) {
  //response.send('respond with a resource');
  response.render('unauthenticated/register')
});

module.exports = router;
