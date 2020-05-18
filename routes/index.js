var express = require('express');
var router = express.Router();
var db = require('../db');


/* GET home page. */
router.get('/', function(req, res, next) {
  //res.redirect('/users/login')
   res.render('index', { title: 'Express' });
});
/*router.get('/login', function(request, response) {
  response.send('respond with a resource');
  response.render('unauthenticated/login')
});*/






module.exports = router;
