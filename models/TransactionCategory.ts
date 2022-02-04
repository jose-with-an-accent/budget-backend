import { DataTypes } from "sequelize"
import { model, sequelize } from "./db"
class TransactionCategory extends model {

}
TransactionCategory.init({
	name: DataTypes.STRING,
}, {sequelize, modelName: 'transaction_category'})

