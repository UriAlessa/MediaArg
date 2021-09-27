const Sequelize = require('sequelize')
const database = require('../config/database')

const Pelicula = database.define('pelicula', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descripcion: {
        type: Sequelize.STRING,
        allowNull: false
    },
    imagen: {
        type: Sequelize.STRING,
        allowNull: false
    },
    genero: {
        type: Sequelize.STRING,
        allowNull: false
    },
    aprobado: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: 1
    }
})

module.exports = Pelicula