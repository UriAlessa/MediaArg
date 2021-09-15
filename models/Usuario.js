const mongoose = require('mongoose')

const usuarioSchema = new mongoose.Schema({
    nombre: {type: String},
    apellido: {type: String},
    email: {type: String},
    avatar: {type: String},
    contraseña: {type: String},
    admin: {type: Boolean, default: false}
})

const Usuario = mongoose.model('usuario', usuarioSchema)

module.exports = Usuario