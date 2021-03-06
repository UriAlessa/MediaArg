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
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    store: store
}))

app.use('/', router)

app.listen(4000, () => console.log('Server listening'))