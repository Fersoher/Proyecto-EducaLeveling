const Alumno = require('../models/alumnos.model.js')
const Test = require('../models/test.model.js')
const Asignatura = require('../models/asignatura.model.js')
const Curso = require('../models/curso.model.js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


async function getAllAlumnos(req, res) {
	try {
		const alumno = await Alumno.findAll({
			where: req.query,
			attributes: {
				exclude: ['contraseña']
			}
		})
		if (alumno) {
			return res.status(200).json(alumno)
		} else {
			return res.status(404).send('No alumno found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function getOneAlumno(req, res) {
	try {
		const alumno = await Alumno.findByPk(req.params.id, {
			attributes: {
				exclude: ['contraseña']
			}
		})
		if (alumno) {
			return res.status(200).json(alumno)
		} else {
			return res.status(404).send('Alumno not found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function getOwnProfile(req, res) {
	try {
		const alumno = await Alumno.findByPk(res.locals.user.id)

		if (alumno) {
			const message = `Hi ${alumno.nombre}!, this is your profile`

			return res.status(200).json({ message, alumno })
		} else {
			return res.status(404).send('Alumno not found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function getOwnTests(req, res) {
	try {
		const alumno = await Alumno.findByPk(res.locals.user.id, {
			include: Test
		})

		if (alumno) {
			const message = `Hi ${alumno.nombre}!, those are your tests.`

			return res.status(200).json({ message: message, test: alumno.tests })
		} else {
			return res.status(404).send('Test not found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function getOwnAsignaturas(req, res) {
	try {
		const alumno = await Alumno.findByPk(res.locals.user.id, {
			include: {
				model: Curso,
				include: Asignatura
			}
		})

		if (alumno) {
			const message = `Hi ${alumno.nombre}!, those are your asignaturas.`

			return res.status(200).json({ message: message, asignatura: alumno.curso })
		} else {
			return res.status(404).send('Asignaturas not found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}
async function getOwnCursos(req, res) {
	try {
		const alumno = await Alumno.findByPk(res.locals.user.id, {
			include: Curso
		})

		if (alumno) {
			const message = `Hi ${alumno.nombre}!, those are your cursos.`
console.log(alumno)
			return res.status(200).json({ message: message, asignatura: alumno.curso })
		} else {
			return res.status(404).send('Cursos not found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function createAlumno(req, res) {
	try {

		const salt = bcrypt.genSaltSync(parseInt(process.env.SALTROUNDS))
		const encrypted = bcrypt.hashSync(req.body.contraseña, salt)
		req.body.contraseña = encrypted

		const alumno = await Alumno.create(req.body)
		return res.status(200).send(alumno)

	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function updateOwnAlumno(req, res) {
	try {
		const alumno = await Alumno.update(req.body, {
			where: {
				id: res.locals.alumno.id,
			}
		})
		if (alumno) {
			return res.status(200).json({ message: 'Alumno updated', alumno: alumno })
		} else {
			return res.status(404).send('Alumno not found')
		}

	} catch (error) {
		return res.status(500).send(error.message)
	}
}

async function updateAlumno(req, res) {
	try {
		const [alumnoExist, alumno] = await Alumno.update(req.body, {
			returning: true,
			where: {
				id: req.params.id,
			},
		})
		if (alumnoExist !== 0) {
			return res.status(200).json({ message: 'Alumno updated', alumno: alumno })
		} else {
			return res.status(404).send('Alumno not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

async function deleteAlumno(req, res) {
	try {
		const alumno = await Alumno.destroy({
			where: {
				id: req.params.alumnoId,
			},
		})
		if (alumno) {
			return res.status(200).send('Alumno deleted')
		} else {
			return res.status(404).send('Alumno not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

module.exports = {
	getAllAlumnos,
	getOwnProfile,
	getOwnTests,
	getOwnAsignaturas,
	getOwnCursos,
	getOneAlumno,
	createAlumno,
	updateAlumno,
	updateOwnAlumno,
	deleteAlumno
}
