const jwt = require('jsonwebtoken')
const Alumno = require('../models/alumnos.models')
const Empleado = require('../models/empleados.model')
require('dotenv').config()

const checkAuth = async (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).send('Token not found')
    }

    jwt.verify(req.headers.authorization, process.env.SECRET,
        async (error, payload) => {
            if (error) {
                console.log(error.message)
                return res.status(401).send('Token not valid')
            }

            const user = await Alumno.findOne({
                where: {
                    email: payload.email
                }
            })

            if (!alumno) {
                return res.status(404).send('User not found')
            }

            res.locals.alumno = alumno
            next()
        })
}

const Empleado = (req, res, next) => {
    if (res.locals.user.role !== 'emplreado') {
        return res.status(401).send('User not authorized')
    }
    next()
}

const  CheckEmpleado = (req, res, next) => {
    if (res.locals.user.role === 'user') {
        return res.status(401).send('User not authorized' )
    }
    next()
}

module.exports = {
    checkAuth,
    checkEmpleado,
}