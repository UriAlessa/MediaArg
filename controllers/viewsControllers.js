const path = require('path')

const viewsControllers = {
    hero: (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'views/hero.html'))
    },
    home: (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'views/index.html'))
    },
    catalogo: (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'views/catalogo.html'))
    },
    login: (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'views/login.html'))
    },
    signin: (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'views/signin.html'))
    }
}

module.exports = viewsControllers