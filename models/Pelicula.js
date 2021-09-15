const mongoose = require('mongoose')

const peliculaSchema = new mongoose.Schema({
    imagen: {type: String},
    titulo: {type: String},
    descripcion: {type: String},
    usuarioId: {type: mongoose.Types.ObjectId, ref: 'usuario'}
})

const Pelicula = mongoose.model('pelicula', peliculaSchema)

module.exports = Pelicula