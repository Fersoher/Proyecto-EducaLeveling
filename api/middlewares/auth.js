const jwt = require('jsonwebtoken')
const Alumno = require('../models/alumnos.model')
const Empleado = require('../models/empleados.model')
require('dotenv').config()

const checkAlumno = async (req, res, next) => { //checkauth (vemos si estamos logeados)
    if (!req.headers.authorization) {
        return res.status(401).send('Token not found')
    }

    jwt.verify(req.headers.authorization, process.env.SECRET,
        async (error, payload) => {
            if (error) {
                console.log(error.message)
                return res.status(401).send('Token not valid')
            }

            const alumno = await Alumno.findOne({
                where: {
                    email: payload.email
                }
            })

            if (!alumno) {
                return res.status(404).send('Alumno not found')
            }

            res.locals.alumno = alumno
            next()
        })
}

const checkEmpleado = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).send('Token not found')
    }

    jwt.verify(req.headers.authorization, process.env.SECRET,
        async (error, payload) => {
            if (error) {
                console.log(error.message)
                return res.status(401).send('Token not valid')
            }

            const empleado = await Empleado.findOne({
                where: {
                    email: payload.email
                }
            })

            if (!empleado) {
                return res.status(404).send('Empleado not found')
            }

            res.locals.empleado = empleado
            next()
        })
}

module.exports = {
    checkAlumno,
    checkEmpleado,
}