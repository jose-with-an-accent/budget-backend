import {DataTypes} from './db'
const { sequelize, Model } = require('./db')

class AccountTransaction extends Model {
	
}

AccountTransaction.init({
	name: DataTypes.STRING,
	memo: DataTypes.STRING,
	amount: DataTypes.INTEGER,
})({sequelize, modelName: 'transaction'})
async function init() {
	await AccountTransaction.sync()
}
export {AccountTransaction, init}