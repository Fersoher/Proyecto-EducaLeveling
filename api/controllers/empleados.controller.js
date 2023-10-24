const Empleado = require('../models/empleados.model')

const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const Asignatura = require('../models/asignatura.model')
const Curso = require('../models/curso.model')
const Test = require('../models/test.model')

async function getAllEmpleados(req, res) {
	try {
		const empleado = await Empleado.findAll({
			where: req.query,
			attributes: {
				exclude: ['contraseña']
			}
		})
		if (empleado) {
			return res.status(200).json(empleado)
		} else {
			return res.status(404).send('No empleado found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function getOneEmpleado(req, res) {
	try {
		const empleado = await Empleado.findByPk(req.params.id, {
			attributes: {
				exclude: ['contraseña']
			}
		})
		if (empleado) {
			return res.status(200).json(empleado)
		} else {
			return res.status(404).send('Empleado not found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function getOwnProfile(req, res) {
	try {
		const empleado = await Empleado.findByPk(res.locals.user.id)


		if (empleado) {
			const message = `Hi ${empleado.nombre}!, this is your profile.`

			return res.status(200).json({ message, empleado })
		} else {
			return res.status(404).send('Empleado not found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function getOwnAsignaturas(req, res) {
	try {
		const empleado = await Empleado.findByPk(res.locals.user.id, {
			include: Asignatura
		})


		if (empleado) {
			const message = `Hi ${empleado.nombre}!, those are your asignaturas.`

			return res.status(200).json({message: message, asignatura: empleado.asignaturas})
		} else {
			return res.status(404).send('Asignaturas not found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}
async function getOwnCursos(req, res) {
	try {
		const empleado = await Empleado.findByPk(res.locals.user.id,{
			include: {
				model: Asignatura,
					include: Curso
				}
				
		})
		if (empleado) {
			const message = `Hi ${empleado.nombre}!, those are your cursos.`

			return res.status(200).json({ message: message, asignatura: empleado.asignaturas })
		} else {
			return res.status(404).send('Cursos not found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function getOwnTests(req, res) {
	try {
		const empleado = await Empleado.findByPk(res.locals.user.id,{
			include: Test
		})

		if (empleado) {
			const message = `Hi ${empleado.nombre}!, those are your tests.`

			return res.status(200).json({ message: message, test: empleado.tests})
		} else {
			return res.status(404).send('Test not found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function createEmpleado(req, res) {
	try {
		const salt = bcrypt.genSaltSync(parseInt(process.env.SALTROUNDS))
		const encrypted = bcrypt.hashSync(req.body.contraseña, salt)
		req.body.contraseña = encrypted

		const empleado = await Empleado.create(req.body)
		return res.status(200).send(empleado)
		
		}
	 catch (error) {
		res.status(500).send(error.message)
	}
}

async function updateOwnEmpleado(req, res) {
	try {
		const empleado = await Empleado.update(req.body, {
			where: {
				id: res.locals.user.id,
			}
		})
		if (empleado) {
			return res.status(200).json({ message: 'Empleado updated', empleado: empleado })
		} else {
			return res.status(404).send('Empleado not found')
		}

	} catch (error) {
		return res.status(500).send(error.message)
	}
}

async function updateEmpleado(req, res) {
	try {
		const [empleadoExist, empleado] = await Empleado.update(req.body, {
			returning: true,
			where: {
				id: req.params.id,
			},
		})
		if (empleadoExist !== 0) {
			return res.status(200).json({ message: 'Empleado updated', empleado: empleado })
		} else {
			return res.status(404).send('Empleado not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

async function deleteEmpleado(req, res) {
	try {
		const empleado = await Empleado.destroy({
			where: {
				id: req.params.id,
			},
		})
		if (empleado) {
			return res.status(200).send('Empleado deleted')
		} else {
			return res.status(404).send('Empleado not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

module.exports = {
	getAllEmpleados,
	getOwnProfile,
	getOwnTests,
    getOwnAsignaturas,
    getOwnCursos,
	getOneEmpleado,
	createEmpleado,
	updateEmpleado,
	updateOwnEmpleado,
	deleteEmpleado
}
