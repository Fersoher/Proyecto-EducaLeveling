const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Alumno = require('../models/alumnos.models')
const Empleado = require("../models/empleados.models.js");

require('dotenv').config()


const signUp = async (req, res) => {
    try {
        if (req.body.password.length < 8) {
            return res.status(400).json({ message: 'Password too short' })
        }
        const payload = { email: req.body.email }
        const salt = bcrypt.genSaltSync(parseInt(10))
        const encrypted = bcrypt.hashSync(req.body.password, salt)
        req.body.password = encrypted

        const alumno = await Alumno.create(req.body)

        const token = jwt.sign(payload, process.env.SECRET, { expiresIn: '1h' })

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}


const login = async (req, res) => {
    try {
        const alumno = await Alumno.findOne({
            where: {
                email: req.body.email
            }
        })

        if (!alumno) {
            return res.status(404).json({ message: 'Error: Wrong Email or Password' })
        }

        const comparePassword = bcrypt.compareSync(req.body.password, alumno.password)
        if (comparePassword) {
            const payload = { email: alumno.email }
            const token = jwt.sign(payload, 'secret', { expiresIn: '1h' })
            // `Alumno: ${alumno.first_name} logged-in `
            return res.status(200).json({ token })
        } else {
            return res
                .status(404)
                .json({ message: "Error: Wrong Email or Password" });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}


module.exports = {
    signUp, login
}