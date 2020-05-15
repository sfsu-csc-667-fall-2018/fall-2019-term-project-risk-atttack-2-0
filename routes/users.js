const express = require('express');
const router = express.Router();
const db = require('../db');
const passport = require('../authorization');

/* GET users listing. */
router.get('/login', function (request, response) {

    console.log(request.flash());
    response.render('unauthenticated/login', {
        message: request.flash()
    })


  /*db.Users.findByEmailAndPassword("Belmeurrr@gmail.com", "password");*/
});
router.post('/login',
    passport.authenticate('local', {
        failureRedirect: '/users/login',
        failureFlash: true
    }),
    (_, response ) =>
    response.redirect('/lobby')
)
/*router.post('/login',
    passport.authenticate('local'),
    function(req, res) {
        // If this function gets called, authentication was successful.
        // `req.user` contains the authenticated user.
        res.redirect('/lobby');
    });*/
/*router.post('/login',/!*(request, response ) => {
        const {username, password} = request.body;
        console.log(username, password);
        response.json(request.body)
    }*!/
        passport.authenticate('local',

        {failureRedirect: '/login',
            successRedirect: '/lobby' })
        //(request, response) =>
            //console.log(JSON.stringify(request.body))
                //.then(response.redirect('/lobby'))
            )
            /!*function(req, res) {
                // If this function gets called, authentication was successful.
                // `req.user` contains the authenticated user.
                res.redirect('/lobby')}*!/

;*/

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
        //response.json(result)
          response.render('unauthenticated/login')

      })
      .catch(error => {
        console.log("ERROR", error);
        // response.json(error)
      });


  //response.json(request.body);
});

module.exports = router;
