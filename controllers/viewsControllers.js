const path = require('path')
const Pelicula = require("../models/Pelicula")
const Usuario = require("../models/Usuario")

const viewsControllers = {
    hero: (req, res) => {
        res.render('hero', {
            title: 'Bienvenido!'
        })
    },
    home: (req, res) => {
        res.render('index', {
            title: 'Home'
        })
    },
    catalogo: async (req, res) => {
        const peliculas = await Pelicula.find()
        res.render('catalogo', {
            title: 'Catalogo',
            peliculas
        })
    },
    login: (req, res) => {
        res.render('login', {
            title: 'Ingresar'
        })
    },
    signin: (req, res) => {
        res.render('signin', {
            title: 'Registrarse'
        })
    },
    perfil: async (req, res) => {
        const usuario = await Usuario.findById('61422400389dbc3a24d589e8')
        const peliculas = await Pelicula.find()
        res.render('perfil', {
            title: 'Tu Perfil',
            usuario,
            peliculas,
            editando: false
        })
    }
}

module.exports = viewsControllers