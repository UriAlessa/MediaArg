const path = require('path')
const Pelicula = require("../models/Pelicula");
const Usuario = require("../models/Usuario");

const peliculasControllers = {
    nuevaPelicula: async (req, res) => {
        const {imagen, titulo, descripcion, aprobado, genero, _id} = req.body
        console.log(req.body)
        if (!_id) {
            console.log('NUEVA')
            await Pelicula.create({
            imagen,
            titulo,
            descripcion,
            genero,
            aprobado,
            })
        } else {
            console.log('UPDATE')
            await Pelicula.update(
                {...req.body},
                {where: {id: _id}}
            )
        }
        res.redirect('/catalogo')
    },
    borrarPelicula: async (req, res) => {
        let pelicula = await Pelicula.findByPk(req.params._id)
        await pelicula.destroy()
        res.redirect('/catalogo')
    },
    editarPelicula: async (req, res) => {
        let pelicula = await Pelicula.findByPk(req.params._id)
        let peliculas = await Pelicula.findAll({raw: true})
        res.render('perfil', {
            title: 'Editar Pelicula',
            editando: pelicula,
            peliculas
        })
    }
}

module.exports = peliculasControllers