var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/:id', function(request, response) {
    //response.send('respond with a resource');
    const { id } = request.params;
    response.json({testMessage: `Posted to ${id}`})
});

module.exports = router;
