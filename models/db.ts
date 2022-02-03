import { Sequelize, Model, DataTypes } from 'sequelize'
import {AccountTransaction} from './Transaction'
const User = require('./User')
const sequelize = new Sequelize({
	dialect: 'sqlite',
	storage: 'uwu.db'
})
export {AccountTransaction, User, sequelize, Model, DataTypes}