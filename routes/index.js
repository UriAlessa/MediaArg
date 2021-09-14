const express = require('express')
const router = express.Router()
const viewsControllers = require('../controllers/viewsControllers')

router.route('/')
.get(viewsControllers.hero)

router.route('/home')
.get(viewsControllers.home)

module.exports = router