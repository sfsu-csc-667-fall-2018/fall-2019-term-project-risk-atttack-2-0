const express = require('express');
const router = express.Router();
const db = require('../db');

/* GET users listing. */
router.get('/login', function(_, response) {

  db.Users.create("Belmeurrr@gmail.com", "password")
  .then(result => {
    response.json(result)
  })
      .catch(error => {
          console.log("ERRORERRORERRORERRORERRORERRORERRORERRORERROR");
        response.json(error)
      });

  /*db.Users.findByEmailAndPassword("Belmeurrr@gmail.com", "password");*/
  response.render('unauthenticated/login')
});

router.get('/register', function(_, response) {
  //response.send('respond with a resource');
  response.render('unauthenticated/register')
});

module.exports = router;
