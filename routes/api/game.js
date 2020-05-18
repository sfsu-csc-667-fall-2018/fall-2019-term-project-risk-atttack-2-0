var express = require('express');
var router = express.Router();
const db = require('../../db');
const javascript = require('../../public/javascripts/gameSetup')



/* GET users listing. */
router.post('/:id', function(request, response) {
    //response.send('respond with a resource');
    const { id } = request.params;


    javascript.determineOrder();
   /* const promise = db.Game.countAmountOfPlayers();
    Promise.all([promise]).then(result =>{
        const myint = result[0];
        console.log(promise)

        console.log(result[0].count);
    })*/


    /*javascript.givePlayersInitialArmies().then(result =>
        console.log(result)
    );*/


    /*console.log("TESTING ADD A PLAYER");
    db.Game.addPlayerToGame(1, 0, "user1");
    console.log('TESTING GIVE PLAYER ARMIES');
    db.Game.givePlayerArmies(1, 10);*/

    /*console.log('TESTING GIVE ALL PLAYERS INITIAL ARMIES');
    db.Game.giveAllPlayersInitialArmies( 30);*/

    /*const howManyInitialArmies = () =>{

    };*/

/*    console.log('TESTING COUNT PLAYERS');
    const promise = db.Game.countAmountOfPlayers();
    Promise.all([ promise]).then(result =>{
        const numOfPlayers = result[0];
        console.log("Number of players: ", numOfPlayers);

    })*/
    //console.log(howManyInitialArmies());
    response.json({testMessage: `Determining order `})

});

router.post('/:id/move', function(request, response) {
    //response.send('respond with a resource');
    const { id } = request.params;
    const { coordinate } = request.body;
    console.log('the id is ' , id);
    response.json({testMessage: `Posted to id ${id}/move: ${coordinate}`})
});

module.exports = router;
