import { DataTypes } from "sequelize";
import { model, sequelize } from "./db";
import { User } from "./User";

class Budget extends model {

}

Budget.init({
	name: DataTypes.STRING
}, { sequelize, modelName: "budget" });

Budget.belongsTo(User, { foreignKey: 'user_id' })

const BudgetUtils = {
	findOne: Budget.findOne,
	findAll: Budget.findAll

}
export { Budget };
export default BudgetUtils;
