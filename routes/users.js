const express = require('express');
const router = express.Router();
const db = require('../db');
const passport = require('../authorization');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'and_the_crowd_goes_rtj';

/* GET users listing. */
router.get('/login', function (request, response) {
    response.render('unauthenticated/login')
});

router.post('/login',
    passport.authenticate('local', {
        failureRedirect: '/users/login',
        failureFlash: true
    }),
        function (request, response) {
            //request.session.save();
            response.redirect('/lobby');
        }/*,
    function (request, response) {
        const {password} = request.body;
        bcrypt.genSalt(saltRounds, function (err, salt) {
            bcrypt.hash(password, salt, function (err, hash) {
                // Store hash in your password DB.
                request.password = hash;

            });

        })
    }*/
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

  bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
            // Store hash in your password DB.

            console.log(password, hash);
            db.Users.create(email, hash, username)
                .then(result => {
                    response.render('unauthenticated/login')

                })
                .catch(error => {
                    console.log("ERROR", error);
                });
        });
    });

});

module.exports = router;
