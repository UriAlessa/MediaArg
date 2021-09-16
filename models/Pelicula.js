const mongoose = require('mongoose')

const peliculaSchema = new mongoose.Schema({
    imagen: {type: String},
    titulo: {type: String},
    descripcion: {type: String},
    aprobado: {type: Boolean, default: false},
    genero: {type: String}
})

const Pelicula = mongoose.model('pelicula', peliculaSchema)

module.exports = Pelicula