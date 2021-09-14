const path = require('path')

const viewsControllers = {
    hero: (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'views/hero.html'))
    },
    home: (req, res) => {
        res.sendFile(path.join(__dirname), '..', 'views/index.html')
    }
}

module.exports = viewsControllers