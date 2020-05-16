var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(_, response) {
    //response.send('respond with a resource');
    response.render('authenticated/lobby')
});

module.exports = router;
