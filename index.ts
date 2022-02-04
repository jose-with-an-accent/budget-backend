import { Request, Response } from "express"
import SETTINGS from './Settings'
/* BEGIN SETTINGS */

/* END SETTINGS */

const express = require('express')

/* MIDDLEWARE FOR HANDLING AUTH */
const passport = require('passport')
const LocalStrategy = require('passport-local')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const expressSession = require('express-session')
const app = express()
const path = require('path')

import AuthController from './controllers/Auth'
import BudgetController from './controllers/Budgets'


app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(expressSession({
	secret: SETTINGS.SESSION_SECRET,
	resave: false,
	saveUninitialized: false,
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

// app.post('/', passport.authenticate('local'), (req, res) => res.send("Logged in!"))
app.get('/', (req, res) => {
	res.sendFile(path.resolve('./auth/login.html'))
})
app.use(`${SETTINGS.BASE_URL}/auth`, AuthController);
app.use(`${SETTINGS.BASE_URL}/budget`, BudgetController);


app.listen(SETTINGS.PORT, console.log(`Running on port ${SETTINGS.PORT}`))

