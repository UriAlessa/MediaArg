const express = require('express')
const router = express.Router()
const viewsControllers = require('../controllers/viewsControllers')
const cuentasControllers = require('../controllers/cuentasControllers')
const peliculasControllers = require('../controllers/peliculasControllers')

router.route('/')
.get(viewsControllers.home)

router.route('/catalogo')
.get(viewsControllers.catalogo)

router.route('/login')
.get(viewsControllers.login)
.post(cuentasControllers.logearse)

router.route('/signup')
.get(viewsControllers.signup)
.post(cuentasControllers.nuevaCuenta)

router.route('/perfil')
.get(viewsControllers.perfil)

router.route('/pelicula/cargar')
.post(peliculasControllers.nuevaPelicula)

router.route('/borrar-pelicula/:_id')
.get(peliculasControllers.borrarPelicula)

router.route('/editar-pelicula/:_id')
.get(peliculasControllers.editarPelicula)

router.route('/signout')
.get(cuentasControllers.deslogear)

module.exports = router