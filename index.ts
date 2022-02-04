import { Request, Response } from "express"
import SETTINGS from './Settings'
import * as fileUpload from 'express-fileupload'
/* BEGIN SETTINGS */

/* END SETTINGS */

const express = require('express')
import * as fs from 'fs'
import BudgetHelper, {Budget} from "./models/Budget"
import Account from "./models/Account"
import User from "./models/User"
import AccountTransaction from "./Models/Transaction"
import TransactionCategory from "./models/TransactionCategory"
/* MIDDLEWARE FOR HANDLING AUTH */
const passport = require('passport')
const LocalStrategy = require('passport-local')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const expressSession = require('express-session')
const app = express()
const path = require('path')
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(expressSession({
	secret: SETTINGS.SESSION_SECRET,
	resave: false,
	saveUninitialized: false,
}))
app.use(fileUpload({
	createParentPath: true,
}))
//NOTE - MULTIUSER AUTH IS DISABLED FOR NOW
// app.use(passport.initialize())
// app.use(passport.session())
/* END MIDDLEWARE */
const CURRENT_USER_ID = 1;
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
Budget.sync()
Account.sync()
User.sync()
AccountTransaction.sync()
TransactionCategory.sync()


fs.readdirSync('./controllers').forEach(file => {
	if (file.endsWith('.js')) {
		console.log("Trying to mount controller: " + file)
		const controller = require('./controllers/' + file)
		const route = file.replace('.js', '')
		app.use('/' + route, controller)
		console.log(controller)
	}
})


app.listen(SETTINGS.PORT, console.log(`Running on port ${SETTINGS.PORT}`))

