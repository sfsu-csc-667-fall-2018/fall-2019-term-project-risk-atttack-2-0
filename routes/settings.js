var express = require('express');
var router = express.Router();
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;


/* GET users listing. */
router.get('/',
    ensureLoggedIn("/users/login"),
    function(_, response) {
    //response.send('respond with a resource');
    response.render('authenticated/settings')
});

module.exports = router;
