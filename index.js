"use strict";
exports.__esModule = true;
var Settings_1 = require("./Settings");
var fileUpload = require("express-fileupload");
/* BEGIN SETTINGS */
/* END SETTINGS */
var express = require('express');
var fs = require("fs");
var Budget_1 = require("./models/Budget");
var Account_1 = require("./models/Account");
var User_1 = require("./models/User");
var Transaction_1 = require("./Models/Transaction");
var TransactionCategory_1 = require("./models/TransactionCategory");
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
app.use(fileUpload({
    createParentPath: true
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
//mount all of the routes
//initialize the database
Budget_1.Budget.sync();
Account_1["default"].sync();
User_1["default"].sync();
Transaction_1["default"].sync();
TransactionCategory_1["default"].sync();
fs.readdirSync('./controllers').forEach(function (file) {
    if (file.endsWith('.js')) {
        console.log("Trying to mount controller: " + file);
        var controller = require('./controllers/' + file);
        var route = file.replace('.js', '');
        app.use('/' + route, controller);
        console.log(controller);
    }
});
app.listen(Settings_1["default"].PORT, console.log("Running on port ".concat(Settings_1["default"].PORT)));
