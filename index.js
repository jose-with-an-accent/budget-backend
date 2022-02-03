"use strict";
exports.__esModule = true;
/* BEGIN SETTINGS */
var Settings_1 = require("./Settings");
var PORT = 3000;
var USER_STORE = {
    findByUsername: function (username) { return ({
        id: 1,
        name: 'Jose',
        email: 'josersanchez0117@gmail.com',
        validatePassword: function (password) { return true; }
    }); }
};
/* END SETTINGS */
var express = require('express');
/* MIDDLEWARE FOR HANDLING AUTH */
var passport = require('passport');
var LocalStrategy = require('passport-local');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressSession = require('express-session');
var app = express();
var path = require('path');
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(expressSession({
    secret: Settings_1["default"].SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
/* END MIDDLEWARE */
var CURRENT_USER_ID = 1;
passport.use(new LocalStrategy(function (username, password, done) {
    var user = USER_STORE.findByUsername(username);
    if (!user || !user.validatePassword(password)) {
        return done(null, false);
    }
    return done(null, user);
}));
app.post('/', passport.authenticate('local'), function (req, res) { return res.send("Logged in!"); });
app.get('/', function (req, res) {
    res.sendFile(path.resolve('./auth/login.html'));
});
app.listen(PORT, console.log("Running on port ".concat(PORT)));
