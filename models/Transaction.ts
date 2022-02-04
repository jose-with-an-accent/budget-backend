import {DataTypes} from 'sequelize'
import { sequelize, model } from './db'
/* make sure to rename AccountTransaction in the future; can't use transaction because of Sequelize */
class AccountTransaction extends model {
	
}

AccountTransaction.init({
	name: DataTypes.STRING,
	memo: DataTypes.STRING,
	amount: DataTypes.FLOAT, //later might use integer for more precision
	balance: DataTypes.FLOAT,

}, {sequelize, modelName: 'transaction'})

const AccountHandlers = {
	init: async () => {
		await AccountTransaction.sync()
	},
	findOne: AccountTransaction.findOne,
	findAll: AccountTransaction.findAll,
	build: AccountTransaction.build,

}
export {AccountTransaction}
export default AccountHandlers