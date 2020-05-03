var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/:id', function(request, response) {
    //response.send('respond with a resource');
    const { id } = request.params;
    response.json({testMessage: `Posted to ${id}`})
});

router.post('/:id/move', function(request, response) {
    //response.send('respond with a resource');
    const { id } = request.params;
    const { coordinate } = request.body;
    console.log('the id is ' , id);
    response.json({testMessage: `Posted to id ${id}/move: ${coordinate}`})
});

module.exports = router;
