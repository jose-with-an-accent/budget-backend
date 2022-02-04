import Budget from "./Budget"
import { DataTypes } from 'sequelize';

const { sequelize, model } = require("./db")
class User extends model {

}
User.init({
	username: DataTypes.STRING,
	password: DataTypes.STRING,
	name: DataTypes.STRING,

}, { sequelize, modelName: 'user' })
/* set up relationship to budgets */
enum LOGIN_ERRORS {
	INVALID_PASSWORD,
	INVALUD_USERNAME
}
class UserUtils {

	static async findUserByEmail(emailAddress) {
		/**
		 * Finds a user by email address
		 * @param {string} emailAddress - the email address to search for
		 */
		try {
			const user = await User.findOne({
				where: {
					emailAddress
				}
			})
			return [user, null];
		}
		catch (e) {
			console.log(e)
			return [null, e];
		}
	}
	static async findUserById(id) {
		/**
		 * Finds a user by id
		 * @param {string} id - the email address to search for
		 */
		try {
			const user = await User.findOne({
				where: {
					id: id
				}
			})
			return [user, null];
		}
		catch (e) {
			console.log(e)
			return [null, e];
		}
	}
}
//NOTE - will rewrite this later; just trying to hurry up

export { User }
export default UserUtils;
