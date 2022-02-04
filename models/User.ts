import { Budget } from "./Budget"

const { sequelize, model, DataTypes } = require("./db")

class User extends model {

}
User.init({
	username: DataTypes.STRING,
	password: DataTypes.STRING,
	name: DataTypes.STRING,

}, { sequelize, modelName: 'user' })
/* set up relationship to budgets */
User.hasMany(Budget, { foreignKey: 'user_id' })

async function saveUser(username: string, password: string, name: string) {
	try {
		const user = await User.create({username: username, password: password, name: name})
		return [user, null]
	} catch(e) {
		return [null, e]
	}
	// format in [user, error]
}
async function insertDemoUser() {
	try {
		await sequelize.sync()
		const u = await User.create({ username: "Jose", password: "45424928", name: "Jose" })
	} catch (e) {
		console.log(e)
	}
}
async function connectToDB() {
	try {
		await sequelize.authenticate()
	} catch (e) {
		console.error("Could not connect to db")
	}
}

const UserUtils = {
	findOne: User.findOne,
	findAll: User.findAll,
	insertDemoUser: insertDemoUser
}
export { User };
export default UserUtils;