const express = require('express')
const router = express.Router()
const viewsControllers = require('../controllers/viewsControllers')
const cuentasControllers = require('../controllers/cuentasControllers')
const peliculasControllers = require('../controllers/peliculasControllers')
const { get } = require('mongoose')


router.route('/')
.get(viewsControllers.hero)

router.route('/home')
.get(viewsControllers.home)

router.route('/catalogo')
.get(viewsControllers.catalogo)

router.route('/login')
.get(viewsControllers.login)

router.route('/signin')
.get(viewsControllers.signin)
.post(cuentasControllers.nuevaCuenta)

router.route('/perfil')
.get(viewsControllers.perfil)

router.route('/pelicula/cargar')
.post(peliculasControllers.nuevaPelicula)

router.route('/borrar-pelicula/:_id')
.get(peliculasControllers.borrarPelicula)

router.route('/editar-pelicula/:_id')
.get(peliculasControllers.editarPelicula)

module.exports = router