const jwt = require('jsonwebtoken')
const Alumno = require('../models/alumnos.model')
const Empleado = require('../models/empleados.model')
require('dotenv').config()

const checkUser = async (req, res, next) => { //checkauth (vemos si estamos logeados)
    if (!req.headers.authorization) {
        return res.status(401).send('Token not found')
    }

    jwt.verify(req.headers.authorization, process.env.SECRET,
        async (error, payload) => {
            if (error) {
                return res.status(401).send('Token not valid')
            }

            const alumno = await Alumno.findOne({
                where: {
                    email: payload.email
                }
            })

            const empleado = await Empleado.findOne({
                where: {
                    email: payload.email
                }
            })

            if (!alumno && !empleado) {
                return res.status(404).send('User not found')
            }
            
            (!alumno) ? res.locals.user = empleado : res.locals.user = alumno
            
            next()
        })
}

/* const checkEmpleado = (req, res, next) => {
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
                return res.status(404).send('User not found')
            }

            res.locals.empleado = empleado
            next()
        })
}
 */

function checkEmpleado(req, res, next) {
    if (!res.locals.user.role) {
        return res.status(401).send('User not authorized')  // Return error for any role different from 'admin'
    } else {
        next()  // If the user has 'admin' role, we let him access the following function in the route.
    }
}

function checkAdmin(req, res, next) {
    if (res.locals.user.role !== 'admin') {
        return res.status(401).send('User not authorized')  // Return error for any role different from 'admin'
    } else {
        next()  // If the user has 'admin' role, we let him access the following function in the route.
    }
}

module.exports = {
    checkUser,
    checkAdmin,
    checkEmpleado
}