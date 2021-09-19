const path = require('path')
const Pelicula = require("../models/Pelicula");
const Usuario = require("../models/Usuario");

const peliculasControllers = {
    nuevaPelicula: async (req, res) => {
        let {imagen, titulo, descripcion, aprobado, genero, _id} = req.body
        const peliculas = await Pelicula.find()
        let nuevaPelicula; 
        if (!_id) {
            if (req.session.admin) {
                aprobado = true
            }
            nuevaPelicula = new Pelicula({
                imagen,
                titulo,
                descripcion,
                aprobado,
                genero
            })
        } else {
            nuevaPelicula = await Pelicula.findOne({_id})
            nuevaPelicula.titulo = titulo
            nuevaPelicula.imagen = imagen
            nuevaPelicula.descripcion = descripcion
            nuevaPelicula.genero = genero
            nuevaPelicula.aprobado = true
        }
        try {
            await nuevaPelicula.save()
            if (!req.session.admin) {
                res.render('catalogo', {
                    title: 'Catalogo',
                    peliculas,
                    logeado: req.session.logeado,
                    editando: true
                })
            } else {
                res.redirect('/catalogo')
            }
        } catch(e) {
            console.log(e)
        }
    },
    borrarPelicula: async (req, res) => {
        await Pelicula.findOneAndDelete({_id: req.params._id})
        res.redirect('/perfil')
    },
    editarPelicula: async (req, res) => {
        let pelicula = await Pelicula.findOne({_id: req.params._id})
        const peliculas = await Pelicula.find()
        const usuarios = await Usuario.find()
        res.render('perfil', {
            title: 'Editar Pelicula',
            editando: pelicula,
            usuarios,
            peliculas,
            logeado: req.session.logeado,
            nombre: req.session.nombre,
            apellido: req.session.apellido,
            avatar: req.session.avatar,
            email: req.session.email,
            admin: req.session.admin
        })
    }
}

module.exports = peliculasControllers