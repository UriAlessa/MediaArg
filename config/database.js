const Sequelize = require('sequelize')
const database = new Sequelize('mediaarg', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
})

module.exports = database