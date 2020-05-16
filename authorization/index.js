const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const saltRounds = 10;

const db = require('../db');

const findUserCallback = (username, password, callback) => {
    //encrypt the password they gave us and compare that with the database
    db.Users.getHash(username)
        .then(user => {
            if(bcrypt.compareSync(password, user.password)){
                return callback(null, user);
            }else{
                console.log("didnt work");
                return callback(null, false);
            }
        })
        .catch(error => {
            console.log("Hash is not found in users", error);
            return callback(null, false, "Hash is not found in users");
        });
};

        //... fetch user from a db etc.



        /*db.Users.findByUsernameAndPassword(username, password)
            .then(user => {
                console.log("We Found The User");
                console.log(JSON.stringify(user));
                //console.log(callback(null, user));
                return callback(null, user)
            })
            .catch(error => {
                console.log("Email and password not found");
                return callback(null, false, "Email and password not found");
            });*/
        /*const match = await bcrypt.compare(password, user.passwordHash);

        if(match) {
            //login
        }

        //...*/


    /*db.Users.getHash(username)
        .then(user => {
            const {password} = user.password;
            console.log("In getHash the password is: ", password);
            return callback(null, user)
        })
        .catch(error => {
            console.log("Hash is not found in users");
            return callback(null, false, "Hash is not found in users");
        }).then(await db.Users.findByUsernameAndPassword(username, password)
            .then(user => {
            console.log("We Found The User");
            console.log(JSON.stringify(user));
            //console.log(callback(null, user));
            return callback(null, user)
        })
        .catch(error => {
            console.log("Email and password not found");
            return callback(null, false, "Email and password not found");
        })
);*/



    /*bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
            // find user
            console.log("Password: ", password);

            password = hash;
            console.log("Password: ", password);

            console.log("Hash: ", hash);

        });
    });*/


    /*db.Users.getByHash(username, password)
        .then(user =>)*/

    /*db.Users.findByUsernameAndPassword(username, function (err, user) {
        if(err) { return callback(err); }
        if(!user) { return callback(null, false); }
        if(user.password != password){ return callback(null, false); }
        return callback(null, user);
    });*/


const serializeUser = (user, callback) =>{
    callback(null, user.id);
};
const deserializeUser = (user, callback) =>{
    db.Users.findById(user)
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
