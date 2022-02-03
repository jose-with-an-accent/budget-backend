import { Sequelize, Model as model } from 'sequelize'

const sequelize = new Sequelize({
	dialect: 'sqlite',
	storage: 'uwu.db'
})

export {sequelize, model}