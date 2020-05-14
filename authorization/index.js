const express = require('express');
const passport = require('passport');
const Strategy = require('passport-local').Strategy;

const db = require('../db');

const findUserCallback = (email, password, callback) => {
    db.Users.findByEmailAndPassword(email, password)
        .then(user => {
            return callback(null, user)
        })
        .catch(error =>{
            return callback(error);
        });
    db.users.findByUsername(email, function (err, user) {
        if(err) { return callback(err); }
        if(!user) { return callback(null, false); }
        if(user.password != password){ return callback(null, false); }
        return callback(null, user);
    });
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

passport.serializeUser(serializeUser());
passport.deserializeUser(deserializeUser());

module.exports = passport;
