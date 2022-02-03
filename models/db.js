"use strict";
exports.__esModule = true;
exports.DataTypes = exports.Model = exports.sequelize = exports.User = exports.AccountTransaction = void 0;
var sequelize_1 = require("sequelize");
exports.Model = sequelize_1.Model;
exports.DataTypes = sequelize_1.DataTypes;
var Transaction_1 = require("./Transaction");
exports.AccountTransaction = Transaction_1.AccountTransaction;
var User = require('./User');
exports.User = User;
var sequelize = new sequelize_1.Sequelize({
    dialect: 'sqlite',
    storage: 'uwu.db'
});
exports.sequelize = sequelize;
