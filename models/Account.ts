const { sequelize, model } = require("./db")
import { DataTypes } from "sequelize"
class Account extends model {

}
Account.init({
	provider_name: DataTypes.STRING,
	provider_id: DataTypes.STRING,
	account_id: DataTypes.STRING,
	account_name: DataTypes.STRING,
	account_type: DataTypes.STRING,
	account_balance: DataTypes.DECIMAL,
}, {sequelize, modelName: 'account'})


const AccountUtils = {
	findOne: Account.findOne,
	findAll: Account.findAll,
}

export default Account;
