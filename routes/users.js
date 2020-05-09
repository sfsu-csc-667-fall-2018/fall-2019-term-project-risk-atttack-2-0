var express = require('express');
var router = express.Router();
var db = require('../db');


/* GET users listing. */
router.get('/login', function(_, response) {
  //response.send('respond with a resource');
  response.render('unauthenticated/login')
});

router.get('/register', function(_, response) {
  //response.send('respond with a resource');
  response.render('unauthenticated/register')
});


router.post('/register', function(req, response) {

  db.any(`INSERT INTO user_table ("username", "password", "email")
          VALUES ('${req.body.username}', '${req.body.password}', '${req.body.email}')`)
          .then(response.render('authenticated/lobby'))
});


module.exports = router;
