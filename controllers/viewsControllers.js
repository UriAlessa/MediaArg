const path = require('path')
const Pelicula = require("../models/Pelicula")
const Usuario = require("../models/Usuario")


const viewsControllers = {
    hero: (req, res) => {
        res.render('hero', {
            title: 'Bienvenido!',
            logeado: req.session.logeado
        })
    },
    home: (req, res) => {
        res.render('index', {
            title: 'Home',
            logeado: req.session.logeado
        })
    },
    catalogo: async (req, res) => {
        const peliculas = await Pelicula.find()
        res.render('catalogo', {
            title: 'Catalogo',
            peliculas,
            logeado: req.session.logeado,
            editando: null
        })
    },
    login: (req, res) => {
        !req.session.logeado
            ? res.render('login', {
                title: 'Ingresar',
                logeado: req.session.logeado,
                error: null
            })
            : res.redirect('/home')
    },
    signup: (req, res) => {
        !req.session.logeado 
        ? res.render('signup', {
            title: 'Registrarse',
            logeado: req.session.logeado,
            error: null
        })
        : res.redirect('/home')
    },
    perfil: async (req, res) => {
        const peliculas = await Pelicula.find()
        const usuarios = await Usuario.find()
        if (req.session.logeado) {
            return res.render('perfil', {
                title: 'Tu Perfil',
                peliculas,
                editando: false,
                usuarios,
                logeado: req.session.logeado,
                nombre: req.session.nombre,
                apellido: req.session.apellido,
                avatar: req.session.avatar,
                email: req.session.email,
                admin: req.session.admin
            })
        }
        res.redirect('/home')
    }
}

module.exports = viewsControllers