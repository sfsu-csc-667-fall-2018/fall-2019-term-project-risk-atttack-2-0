const express = require('express');
const router = express.Router();

//get the homepage

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/users/register', (_, res) => {
    res.render('unauthenticated/register')
});


module.exports = router;
