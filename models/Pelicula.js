const mongoose = require('mongoose')

const peliculaSchema = new mongoose.Schema({
    imagen: {type: String},
    titulo: {type: String},
    descripcion: {type: String},
    usuarioId: {type: mongoose.Types.ObjectId, ref: 'usuario'},
    aprobado: {type: Boolean, default: true},
    genero: {type: String}
})

const Pelicula = mongoose.model('pelicula', peliculaSchema)

module.exports = Pelicula