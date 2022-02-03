import 'dotenv/config'
import { Configuration, PlaidEnvironments } from 'plaid'
enum DB_TYPES {
	POSTGRES, SQLITE
}
const SETTINGS = {
	USER_STORE: {
		findByUsername: (username) => ({
			id: 1,
			name: 'Jose',
			email: 'josersanchez0117@gmail.com',
			validatePassword: (password) => true
		})
	},
	DOMAIN: '',
	DB_TYPES: DB_TYPES.POSTGRES,
	DB_CONN_STRING: "",
	SESSION_SECRET: process.env.EXPRESS_SESSION_SECRET,
	PLAID_INTEGRATION: new Configuration({
		basePath: PlaidEnvironments.sandbox,
		baseOptions: {
			headers: {
				CLIENT_ID: '',
				SECRET: process.env.EXPRESS_SESSION_SECRET
			}
		}
	})
}
export default SETTINGS