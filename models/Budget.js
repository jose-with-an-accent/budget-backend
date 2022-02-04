"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Budget = void 0;
var sequelize_1 = require("sequelize");
var db_1 = require("./db");
var User_1 = require("./User");
var Budget = /** @class */ (function (_super) {
    __extends(Budget, _super);
    function Budget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Budget;
}(db_1.model));
exports.Budget = Budget;
Budget.init({
    name: sequelize_1.DataTypes.STRING
}, { sequelize: db_1.sequelize, modelName: "budget" });
Budget.belongsTo(User_1.User, { foreignKey: 'user_id' });
var BudgetUtils = {
    findOne: Budget.findOne,
    findAll: Budget.findAll
};
exports["default"] = BudgetUtils;
