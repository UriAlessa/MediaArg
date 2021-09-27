const express = require('express')
const router = express.Router()
const viewsControllers = require('../controllers/viewsControllers')
const cuentasControllers = require('../controllers/cuentasControllers')
const peliculasControllers = require('../controllers/peliculasControllers')

router.route('/')
.get(viewsControllers.home)

router.route('/catalogo')
.get(viewsControllers.catalogo)

router.route('/perfil')
.get(viewsControllers.cargarPelicula)

router.route('/pelicula/cargar')
.post(peliculasControllers.nuevaPelicula)

router.route('/borrar-pelicula/:_id')
.get(peliculasControllers.borrarPelicula)

router.route('/editar-pelicula/:_id')
.get(peliculasControllers.editarPelicula)

router.route('/signout')
.get(cuentasControllers.deslogear)

module.exports = router