const express = require('express')
const router = express.Router()
const viewsControllers = require('../controllers/viewsControllers')

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

module.exports = router