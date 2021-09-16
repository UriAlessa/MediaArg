const express = require('express')
const router = require('./routes/index')
require('dotenv').config()
require('./config/database')

const app = express()

app.use(express.static('public'))
app.set('view engine', 'ejs') // Defino que voy a trabajar con un motor de plantillas, template engine/view engine, y cual: ejs. Automaticamente va a buscar las vistas en la carpeta view, no tengo que indicarle las rutas.  Y va a buscar automaticamente archivos de tipo ejs. Los HTML que tengo, e
app.use(express.urlencoded({extended: true}))


app.use('/', router)

app.listen(4000, () => console.log('Server listening'))