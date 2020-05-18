const database = require('../../db');
console.log("GAME SETUP SCRIPT IS RUNNING");

/*function howManyInitialArmies(){
    const promise = db.Game.countAmountOfPlayers();
    Promise.all([promise]).then(result =>{
        return result[0];
    })


}*/

async function givePlayersInitialArmies(){
    console.log("GIVING PLAYERS INITIAL ARMIES");
     database.Game.giveAllPlayersInitialArmies(30);

/*    Promise.all([promise1]).then(result =>{

    })*/
    //we need to insert armies to place for players in game
}

function determineOrder(){
    console.log("DETERMINING ORDER")
    //random order for now cutting corners
    let num1 = Math.floor((Math.random() * 6) + 1);
    let num2 = Math.floor((Math.random() * 6) + 1);
    let num3 = Math.floor((Math.random() * 6) + 1);
    let num4 = Math.floor((Math.random() * 6) + 1);

    while(!(num1 !== num2
        && num2 !== num3
        && num3 !== num4
        && num4 !== num1
        && num4 !== num2
        && num3 !== num1)
        ){
            num1 = Math.floor((Math.random() * 6) + 1);
            num2 = Math.floor((Math.random() * 6) + 1);
            num3 = Math.floor((Math.random() * 6) + 1);
            num4 = Math.floor((Math.random() * 6) + 1);
    }

    const numArray = [num1, num2, num3, num4];
    const playerArray = ["player1", "player2", "player3", "player4"];

    console.log(playerArray[0], num1);
    console.log(playerArray[1], num2);
    console.log(playerArray[2], num3);
    console.log(playerArray[3], num4);

    for(let index = 0; index < 3; index++) {
        for(let yindex = index+1; yindex < 4; yindex++){
            if(numArray[index] < numArray[yindex]){
                let temp = numArray[index];
                numArray[index] = numArray[yindex];
                numArray[yindex] = temp;

                temp = playerArray[index];
                playerArray[index]  = playerArray[yindex];
                playerArray[yindex] = temp;
            }
        }
    }

    /*numArray.sort(function (a, b) {
        return b-a;
    });*/
    console.log(numArray);
    console.log(playerArray);

    //need to link up the game database or player with the order
}

module.exports = {
    givePlayersInitialArmies,
    determineOrder
}
