const { sequelize, Model, DataTypes } = require("./db")

class User extends Model {

}
User.init({
	username: DataTypes.STRING,
	password: DataTypes.STRING,
	name: DataTypes.STRING,

}, {sequelize, modelName: 'user'})

User.hasOne
async function insertDemoUser() {
	try {
	await sequelize.sync()
	const u = await User.create({username: "Jose", password: "45424928", name: "Jose"})
	} catch(e) {
		console.log(e)
	}
}
async function connectToDB() {
	try {
		await sequelize.authenticate()
	} catch(e) {
		console.error("Could not connect to db")
	}
}

module.exports = {
	connectToDB, insertDemoUser
}