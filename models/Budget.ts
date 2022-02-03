import { DataTypes } from "sequelize";
import { model } from "./db";

class Budget extends model {

}

Budget.init({
	name: DataTypes.STRING,

})({ sequelize, modelName: "budget" });
