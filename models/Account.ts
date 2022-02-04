import { Transaction } from "sequelize/dist"

const { sequelize, model, DataTypes } = require("./db")

class Account extends model {

}
Account.init({
	provider_name: DataTypes.STRING,
	provider_id: DataTypes.STRING,
	account_id: DataTypes.STRING,
	account_name: DataTypes.STRING,
	account_type: DataTypes.STRING,
	account_balance: DataTypes.DECIMAL,
})

Account.hasMany(Transaction, {foreignKey: 'transaction_id'});

const AccountUtils = {
	findOne: Account.findOne,
	findAll: Account.findAll,
}

export { Account };
export default AccountUtils;