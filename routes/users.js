const express = require('express');
const router = express.Router();
const db = require('../db');
const passport = require('../authorization');

/* GET users listing. */
router.get('/login', function (request, response) {

    console.log(request.flash());
    response.render('unauthenticated/login')


  /*db.Users.findByEmailAndPassword("Belmeurrr@gmail.com", "password");*/
});
router.post('/login',

        passport.authenticate('local',
            { successReturnToOrRedirect: '/lobby',
                failureRedirect: '/login' }

    )
);
/*,
        { failureRedirect: '/users/login',}),
    (request, response) => {
        console.log("WTF IS HAPPENING");
        response.redirect('/lobby');
    });*/
    /*passport.authenticate('local', {
        failureRedirect: '/users/login',
        failureFlash: true
    }),
    (_, response ) => {

        console.log("PRINTING OUT RESPONSE.BODY");
        console.log(response.body);
        //console.log(JSON.stringify(response));
        console.log("authenticated, redirecting to lobby");
        response.redirect('/lobby')
    }

)*/

router.get('/logout', (request, response) => {
    request.logout();
    response.redirect('/');
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
