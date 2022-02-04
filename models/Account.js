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
var _a = require("./db"), sequelize = _a.sequelize, model = _a.model;
var sequelize_1 = require("sequelize");
var Account = /** @class */ (function (_super) {
    __extends(Account, _super);
    function Account() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Account;
}(model));
Account.init({
    provider_name: sequelize_1.DataTypes.STRING,
    provider_id: sequelize_1.DataTypes.STRING,
    account_id: sequelize_1.DataTypes.STRING,
    account_name: sequelize_1.DataTypes.STRING,
    account_type: sequelize_1.DataTypes.STRING,
    account_balance: sequelize_1.DataTypes.DECIMAL
}, { sequelize: sequelize, modelName: 'account' });
var AccountUtils = {
    findOne: Account.findOne,
    findAll: Account.findAll
};
exports["default"] = Account;
