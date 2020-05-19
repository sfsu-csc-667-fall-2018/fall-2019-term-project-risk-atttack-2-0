//todo
const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;
var db = require('../db');


/* GET users listing. */
router.get('/',
    ensureLoggedIn("/users/login"),
    function(request, response) {
      var username = request.query.user;

      db.Users.getHash(username)
        .then(result => {
          response.render('authenticated/lobby', {username: username, uid: result.id})
        })
        .catch(error => {
          console.log("ERROR", error);
        });


});



module.exports = router;
