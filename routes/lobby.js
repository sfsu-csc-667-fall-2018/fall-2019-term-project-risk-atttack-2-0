const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;


/* GET users listing. */
router.get('/',
    ensureLoggedIn("/users/login"),
    function(request, response) {
    //response.send('respond with a resource');
        console.log("WE ARE PASSED ENSURELOGGEDIN");

            response.render('authenticated/lobby')
});

module.exports = router;
