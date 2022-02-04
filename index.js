"use strict";
exports.__esModule = true;
var Settings_1 = require("./Settings");
/* BEGIN SETTINGS */
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
var Auth_1 = require("./controllers/Auth");
var Budgets_1 = require("./controllers/Budgets");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(expressSession({
    secret: Settings_1["default"].SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));
//NOTE - MULTIUSER AUTH IS DISABLED FOR NOW
// app.use(passport.initialize())
// app.use(passport.session())
/* END MIDDLEWARE */
var CURRENT_USER_ID = 1;
// passport.use(
// 	new LocalStrategy(
// 		(username, password, done) => {
// 			const user = USER_STORE.findByUsername(username)
// 			if (!user || !user.validatePassword(password)) {
// 				return done(null, false)
// 			}
// 			return done(null, user)
// 		}
// 	)
// )
// app.post('/', passport.authenticate('local'), (req, res) => res.send("Logged in!"))
app.get('/', function (req, res) {
    res.sendFile(path.resolve('./auth/login.html'));
});
app.use("".concat(Settings_1["default"].BASE_URL, "/auth"), Auth_1["default"]);
app.use("".concat(Settings_1["default"].BASE_URL, "/budget"), Budgets_1["default"]);
app.listen(Settings_1["default"].PORT, console.log("Running on port ".concat(Settings_1["default"].PORT)));
