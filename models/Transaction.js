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
var sequelize_1 = require("sequelize");
var db_1 = require("./db");
/* make sure to rename AccountTransaction in the future; can't use transaction because of Sequelize */
var AccountTransaction = /** @class */ (function (_super) {
    __extends(AccountTransaction, _super);
    function AccountTransaction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AccountTransaction;
}(db_1.model));
AccountTransaction.init({
    description: sequelize_1.DataTypes.STRING,
    date: sequelize_1.DataTypes.STRING,
    balance: sequelize_1.DataTypes.DECIMAL,
    amount: sequelize_1.DataTypes.DECIMAL
}, { sequelize: db_1.sequelize, modelName: 'transaction' });
exports["default"] = AccountTransaction;
