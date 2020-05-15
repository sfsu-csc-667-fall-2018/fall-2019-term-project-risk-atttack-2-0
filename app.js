const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const flash = require('connect-flash');

//console.log("NODE ENV IS " + process.env.NODE_ENV)
if (process.env.NODE_ENV === 'development') {
  require("dotenv").config();

  //console.log(process.env)
}

const passport = require('./authorization');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const lobbyRouter = require('./routes/lobby');
const gamesRouter = require('./routes/games');
const settingsRouter = require('./routes/settings');

const apiRouter = require('./routes/api/game');

const testsRouter = require('./tests/test');





var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session(
  {
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
  }));

app.use(flash())

app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/lobby', lobbyRouter);
app.use('/games', gamesRouter);
app.use('/settings', settingsRouter);
app.use('/api/games', apiRouter);
app.use('/tests', testsRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
