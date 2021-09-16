const path = require('path');
const Pelicula = require('../models/Pelicula');
const Usuario = require("../models/Usuario");
const bcryptjs = require('bcryptjs')

const cuentasControllers = {
    nuevaCuenta: async (req, res) => {
        const {nombre, apellido, avatar, email, contraseña, admin} = req.body
        let contraseñaHasheada = bcryptjs.hashSync(contraseña)
        const nuevaCuenta = new Usuario({nombre, apellido, avatar, email, contraseña: contraseñaHasheada, admin: admin ? true : false})
        try {
            let usuarioExiste = await Usuario.findOne({email: email})
            if (usuarioExiste) throw new Error('Ese email ya está en uso, utiliza otro o inicia sesión.')
            await nuevaCuenta.save()
            res.redirect('/login')
        } catch(error) {
            console.log(error)
        }
    },
    logearse: async (req, res) => {
        const {email, contraseña} = req.body
        const usuarios = await Usuario.find()
        let peliculas = await Pelicula.find()
        try {
            let usuario = await Usuario.findOne({email})
            if (!usuario) throw new Error('El usuario o la contraseña no existe')
            let contraseñaCorrecta = bcryptjs.compareSync(contraseña, usuario.contraseña)
            if (!contraseñaCorrecta) throw new Error('El usuario o la contraseña no existe')
            req.session.logeado = true
            req.session.nombre = usuario.nombre
            req.session.apellido = usuario.apellido
            req.session.avatar = usuario.avatar
            req.session.email = usuario.email,
            req.session.admin = usuario.admin
            res.render('perfil', {
                title: 'Tu Perfil',
                editando: false,
                usuarios,
                logeado: req.session.logeado,
                nombre: req.session.nombre,
                apellido: req.session.apellido,
                avatar: req.session.avatar,
                email: req.session.email,
                admin: req.session.admin,
                peliculas
            })
        } catch (error) {
            console.log(error)
        }
    },
    deslogear: (req, res) => {
        req.session.destroy(() => {
            res.redirect('/home')
        })
    }
}

module.exports = cuentasControllers