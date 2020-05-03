var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:id', function(request, response) {
    //response.send('respond with a resource');

    const { id } = request.params;
    response.render('authenticated/game', { id })
});

module.exports = router;
