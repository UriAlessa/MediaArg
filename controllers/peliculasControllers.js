const path = require('path')
const Pelicula = require("../models/Pelicula");
const Usuario = require("../models/Usuario");

const peliculasControllers = {
    nuevaPelicula: async (req, res) => {
        const {imagen, titulo, descripcion, aprobado, usuarioId, genero, _id} = req.body
        let nuevaPelicula; 
        
        if (!_id) {
            nuevaPelicula = new Pelicula({
                imagen,
                titulo,
                descripcion,
                aprobado,
                usuarioId: '61422400389dbc3a24d589e8',
                genero
            })
        } else {
            nuevaPelicula = await Pelicula.findOne({_id})
            nuevaPelicula.titulo = titulo
            nuevaPelicula.imagen = imagen
            nuevaPelicula.descripcion = descripcion
            nuevaPelicula.genero = genero
        }
        try {
            await nuevaPelicula.save()
            console.log(nuevaPelicula)
            res.redirect('/catalogo')
        } catch(e) {
            console.log(e)
        }
    },
    borrarPelicula: async (req, res) => {
        await Pelicula.findOneAndDelete({_id: req.params._id})
        res.redirect('/catalogo')
    },
    editarPelicula: async (req, res) => {
        const usuario = await Usuario.findById('61422400389dbc3a24d589e8')
        let pelicula = await Pelicula.findOne({_id: req.params._id})
        const peliculas = await Pelicula.find()
        console.log(pelicula)
        res.render('perfil', {
            title: 'Editar Pelicula',
            editando: pelicula,
            usuario,
            peliculas
        })
    }
}

module.exports = peliculasControllers