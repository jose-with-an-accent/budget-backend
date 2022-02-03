"use strict";
exports.__esModule = true;
exports.model = exports.sequelize = void 0;
var sequelize_1 = require("sequelize");
exports.model = sequelize_1.Model;
var sequelize = new sequelize_1.Sequelize({
    dialect: 'sqlite',
    storage: 'uwu.db'
});
exports.sequelize = sequelize;
