const passport = require('passport');
const Strategy = require('passport-local').Strategy;

const db = require('../db');

const findUserCallback = (username, password, callback) => {
    db.Users.findByUsernameAndPassword(username, password)
        .then(user => {
            return callback(null, user)
        })
        .catch(error =>{
            return callback("Email and password not found");
        });

    /*db.Users.findByUsernameAndPassword(username, function (err, user) {
        if(err) { return callback(err); }
        if(!user) { return callback(null, false); }
        if(user.password != password){ return callback(null, false); }
        return callback(null, user);
    });*/
};

const serializeUser = (user, callback) =>{
    callback(null, user.id)
};
const deserializeUser = (id, callback) =>{
    db.Users.findById(id)
        .then(user =>{
            callback(null, user)
        })
        .catch(error =>{
            callback(error)
        })
};

passport.use(new Strategy(findUserCallback));

passport.serializeUser(serializeUser);
passport.deserializeUser(deserializeUser);

module.exports = passport;
