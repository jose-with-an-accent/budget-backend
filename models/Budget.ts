import { DataTypes } from "sequelize";
import { model, sequelize } from "./db";
import User from "./User";

class Budget extends model {

}

Budget.init({
	name: DataTypes.STRING,
	user_id: DataTypes.INTEGER,

}, { sequelize, modelName: "budget" });

const BudgetHelper = {
	findOne: async () => {
		try {
			const budget = await Budget.findOne();
			return [budget, null];
		} catch (e) {
			return [null, e];
		}
	},
	create: async (name: string, user_id: number) => {
		try {
			const budget = await Budget.create({ name: name, user_id: user_id });
		} catch (e) {
			return [null, e];
		}
	},
	findbyPK: async (id: number) => {
		try {
			const budget = await Budget.findByPk(id);
			return [budget, null];
		} catch (e) {
			return [null, e];
		}
	},
	findAll: async () => {
		try {
			const budgets = await Budget.findAll();
			return [budgets, null];
		} catch (e) {
			return [null, e];
		}
	}
}
export { Budget }
export default BudgetHelper;