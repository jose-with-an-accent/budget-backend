import {DataTypes} from 'sequelize'
const { sequelize, Model } = require('./db')

class AccountTransaction extends Model {
	
}

AccountTransaction.init({
	name: DataTypes.STRING,
	memo: DataTypes.STRING,
	amount: DataTypes.INTEGER,
})({sequelize, modelName: 'transaction'})

const AccountHandlers = {
	init: async () => {
		await AccountTransaction.sync()
	},
	findOne: AccountTransaction.findOne,
	findAll: AccountTransaction.findAll,

}
export {AccountTransaction}
export default AccountHandlers