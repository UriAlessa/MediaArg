const path = require('path')
const Usuario = require("../models/Usuario");

const cuentasControllers = {
    nuevaCuenta: async (req, res) => {
        const {nombre, apellido, avatar, email, contraseña, admin} = req.body
        let nuevaCuenta = new Usuario({
            nombre,
            apellido,
            avatar,
            email,
            contraseña,
            admin: admin ? true : false
        })
        try {
            await nuevaCuenta.save()
            res.redirect('/catalogo')
        } catch(e) {
            console.log(e)
        }
    }
}

module.exports = cuentasControllers