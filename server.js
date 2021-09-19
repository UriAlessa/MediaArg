const express = require('express')
const router = require('./routes/index')
require('dotenv').config()
require('./config/database')
const session = require('express-session')
const mongo = require('connect-mongodb-session')(session)
const store = new mongo({
    uri: process.env.MONGO,
    collection: 'sessions'
})

const app = express()

app.use(express.static('public'))
app.set('view engine', 'ejs') // Defino que voy a trabajar con un motor de plantillas, template engine/view engine, y cual: ejs. Automaticamente va a buscar las vistas en la carpeta view, no tengo que indicarle las rutas.  Y va a buscar automaticamente archivos de tipo ejs. Los HTML que tengo, e
app.use(express.urlencoded({extended: true}))
app.use(session({
    secret: process.env.SECRET,
    resave: false, // No me cambie la sesion en cada pedido que haga el usuario.
    saveUninitialized: false,
    store: store
}))

app.use('/', router)

app.listen(process.env.PORT || 4000, process.env.HOST || '0.0.0.0', () => console.log('Server listening'))