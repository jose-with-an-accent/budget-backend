import 'dotenv/config'
import { Configuration, PlaidEnvironments } from 'plaid'
enum DB_TYPES {
	POSTGRES, SQLITE
}
const SETTINGS = {
	DOMAIN: '',
	PORT: 3000,
	DB_TYPES: DB_TYPES.POSTGRES,
	DB_CONN_STRING: "",
	SESSION_SECRET: process.env.EXPRESS_SESSION_SECRET,
	BASE_URL: "/api/v1",
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