var express = require('express');
var router = express.Router();
var db = require('../db');

router.get('/', (request, response) => {
    db.any(`INSERT INTO test_table ("testString") VALUES ('Hello at ${Date.now}')`)
        .then(_ => db.any(`SELECT * FROM test_table`))
        .then(results => response.json(results))
        .catch(error => {
            console.log(error);
            response.json({error})
        });

    const gameRoomId = 42;

    db.one("SELECT * FROM games WHERE id=${1}", [gameRoomId])
        .then(({id, description}) =>{
            io.emit(`GAME_${gameRoomId}_${userId}_STATE_UPDATE`, { })
        })
});

io.on(`GAME_${gameRoomId}_${userId}_STATE_UPDATE`, ({board, player, players}) => {
document.querySelector('#board').innerHTML = "Something new"
})

module.exports = router;