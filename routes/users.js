const express = require('express');
const router = express.Router();
const db = require('../db');
const passport = require('../authorization');

/* GET users listing. */
router.get('/login', function (request, response) {

   // console.log(request.session);
    response.render('unauthenticated/login')


  /*db.Users.findByEmailAndPassword("Belmeurrr@gmail.com", "password");*/
});
/*router.post('/login', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
        if (err) { return next(err); }
        if (!user) { return res.redirect('/users/login'); }
        req.logIn(user, function(err) {
            if (err) { return next(err); }
            console.log("WE IN ROUTER.POST");
            //console.log(JSON.stringify(req.session.passport.user));
            return res.redirect('/lobby');
        });
    })(req, res, next);
});*/
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
router.post('/login', passport.authenticate('local', {
            failureRedirect: '/users/login',
            failureFlash: true
        }),
        function(request, response ) {
            //request.session.save();
            response.redirect('/lobby');
        }
    );

router.get('/logout', (request, response) => {
    request.logout();
    response.redirect('/');
});

router.get('/register', function (request, response) {
  response.render('unauthenticated/register')
});

router.post('/register', (request, response ) => {
  const {username, password, email} = request.body;
  db.Users.create(email, password, username)
      .then(result => {
          response.render('unauthenticated/login')

      })
      .catch(error => {
        console.log("ERROR", error);
      });
});

module.exports = router;
