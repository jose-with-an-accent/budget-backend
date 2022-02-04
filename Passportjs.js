import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as JWTStrategy } from "passport-jwt";
import UserUtils from './models/User'
import * as bcrypt from 'bcrypt';
//NOTE - code largely guided by https://github.com/paigen11/mysql-registration-passport
///TODO - add register password strategy
passport.use('login', new LocalStrategy({
	usernameField: 'email',
	passwordField: 'password',
	passReqToCallback: true,
	session: false},
	async (req, email, password, done) => {
		const [user, error] = UserUtils.findUser(email)

		if (user === null) {
			return done(null, false, {message: "User not found"})
		} 
		const isCorrectPassword = await bcrypt.compare(password, user.password)
		if (!isCorrectPassword) {
			return done(null, false, {message: "Incorrect Credentials"})
		}
		return done(null, user)
	}))


passport.use('jwt', new JWTStrategy(options, (jwt_payload, done) => {
	const [user] = UserUtils.findUserById(jwt_payload.id)