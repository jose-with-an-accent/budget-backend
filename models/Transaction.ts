import {DataTypes} from 'sequelize'
import { sequelize, model } from './db'
/* make sure to rename AccountTransaction in the future; can't use transaction because of Sequelize */
class AccountTransaction extends model {
	
}

AccountTransaction.init({
	description: DataTypes.STRING,
	date: DataTypes.STRING,
	balance: DataTypes.DECIMAL,
	amount: DataTypes.DECIMAL,

},  {sequelize, modelName: 'transaction'})

export default AccountTransaction;