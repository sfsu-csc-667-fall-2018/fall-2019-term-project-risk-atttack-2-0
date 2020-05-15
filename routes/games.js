const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/:id', function(request, response) {
    //response.send('respond with a resource');

    const { id } = request.params;
    response.render('authenticated/game', { id })
});


router.get('/gamestest', function(request, response) {

    response.render('authenticated/gametest')
});

module.exports = router;
