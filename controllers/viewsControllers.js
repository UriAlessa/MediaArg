const path = require('path')
const Pelicula = require("../models/Pelicula")
const Usuario = require("../models/Usuario")


const viewsControllers = {
    home: (req, res) => {
        res.render('index', {
            title: 'Home',
        })
    },
    catalogo: async (req, res) => {
        let peliculas = await Pelicula.findAll({raw: true})
        res.render('catalogo', {
            title: 'Catalogo',
            peliculas,
            editando: null
        })
    },
    cargarPelicula: async (req, res) => {
        let peliculas = await Pelicula.findAll({raw: true})
        res.render('perfil', {
            title: 'Cargar pelicula',
            editando: false,
            peliculas
        })      
    }
}

module.exports = viewsControllers