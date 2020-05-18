//todo
const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;

/* GET users listing. */
router.get('/',
    ensureLoggedIn("/users/login"),
    function(request, response) {
      var user = request.query.user;

      response.render('authenticated/lobby', {user: user})

});


module.exports = router;
