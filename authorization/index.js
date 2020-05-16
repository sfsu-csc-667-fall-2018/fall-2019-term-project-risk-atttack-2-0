const passport = require('passport');
const Strategy = require('passport-local').Strategy;

const db = require('../db');

const findUserCallback = (username, password, callback) => {
    console.log(username, password);
    db.Users.findByUsernameAndPassword(username, password)
        .then(user => {
            console.log("We Found The User");
            console.log(JSON.stringify(user));
            //console.log(callback(null, user));
            return callback(null, user)
        })
        .catch(error =>{
            console.log("Email and password not found");
            return callback(null, false);
        });

    /*db.Users.findByUsernameAndPassword(username, function (err, user) {
        if(err) { return callback(err); }
        if(!user) { return callback(null, false); }
        if(user.password != password){ return callback(null, false); }
        return callback(null, user);
    });*/
};

const serializeUser = (user, callback) =>{
    console.log("WE ARE IN SERIALIZEUSER");
    console.log(user.id);
    callback(null, user.id);
};
const deserializeUser = (user, callback) =>{
    console.log("WE ARE IN DESERIALIZEUSER");
    console.log(user);
    db.Users.findById(user)
        .then(user =>{
            console.log("we found the user");
            callback(null, user)
        })
        .catch(error =>{
            console.log("we found the user");
            callback(error)
        })
};

passport.use(new Strategy(findUserCallback));

passport.serializeUser(serializeUser);
passport.deserializeUser(deserializeUser);
/*passport.serializeUser(serializeUser);
passport.deserializeUser(deserializeUser);*/

module.exports = passport;
