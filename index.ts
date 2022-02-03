import { Request, Response } from "express"

/* BEGIN SETTINGS */
import SETTINGS from "./Settings"
const PORT = 3000

const USER_STORE = {
	findByUsername: (username) => ({
		id: 1,
		name: 'Jose',
		email: 'josersanchez0117@gmail.com',
		validatePassword: (password) => true
	})
}
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
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(expressSession({
	secret: SETTINGS.SESSION_SECRET,
	resave: false,
	saveUninitialized: false,
}))
app.use(passport.initialize())
app.use(passport.session())
/* END MIDDLEWARE */
const CURRENT_USER_ID = 1;

passport.use(
	new LocalStrategy(
		(username, password, done) => {
			const user = USER_STORE.findByUsername(username)

			if (!user || !user.validatePassword(password)) {
				return done(null, false)
			}
			return done(null, user)
		}
	)
)

app.post('/', passport.authenticate('local'), (req, res) => res.send("Logged in!"))
app.get('/', (req, res) => {
	res.sendFile(path.resolve('./auth/login.html'))
})

app.listen(PORT, console.log(`Running on port ${PORT}`))

