const express = require('express');
const router = express.Router();
const db = require('../db');

/* GET users listing. */
router.get('/login', function (_, response) {



  /*db.Users.findByEmailAndPassword("Belmeurrr@gmail.com", "password");*/
});

router.get('/register', function (request, response) {

  /*const {username, password} = request.body;
  console.log(username, password);*/
  //response.send('respond with a resource');
  response.render('unauthenticated/register')
});

router.post('/register', (request, response ) => {
  const {username, password, email} = request.body;
  console.log(username, password, email);

  console.log("RETURNING REQUEST INFO" + JSON.stringify(request.body));

  db.Users.create(email, password, username)
      .then(result => {
        response.json(result)
      })
      .catch(error => {
        console.log("ERROR", error);
        // response.json(error)
      });

  response.render('unauthenticated/login')

  //response.json(request.body);
});

module.exports = router;
