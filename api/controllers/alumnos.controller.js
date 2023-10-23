const Alumno = require('../models/alumnos.model.js')
const jwt = require('jsonwebtoken')

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
		const alumno = await Alumno.findByPk(req.params.alumnoId, {
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
		const alumno = await Alumno.findOne({
			where: {
				id: res.params.alumno.id
			},
			attributes: ['id','first_name', 'last_name','dni','email'],
		})

		if (alumno) {
			const message = `Hi ${alumno.first_name}!, this is your profile`

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
		const alumno = await Alumno.test.findAll({
			where: {
				id: res.params.alumno.id
			},
			attributes: [`alumno`, `profesor`, `asignatura`, `actividad`, `nota individual`, `fecha`],
		})

		if (alumno) {
			const message = `Hi ${alumno.first_name}!, those are your tests.`

			return res.status(200).json({ message, alumno })
		} else {
			return res.status(404).send('Test not found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function getOwnAsignaturas(req, res) {
	try {
		const alumno = await Alumno.asignatura.findAll({
			where: {
				id: res.params.alumno.id
			},
			attributes: [`asignatura`],
		})

		if (alumno) {
			const message = `Hi ${alumno.first_name}!, those are your asignaturas.`

			return res.status(200).json({ message, alumno })
		} else {
			return res.status(404).send('Asignaturas not found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}
async function getOwnCursos(req, res) {
	try {
		const alumno = await Alumno.curso.findAll({
			where: {
				id: res.params.alumno.id
			},
			attributes: [`curso`, `alumno`],
		})

		if (alumno) {
			const message = `Hi ${alumno.first_name}!, those are your cursos.`

			return res.status(200).json({ message, alumno })
		} else {
			return res.status(404).send('Cursos not found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function createAlumno(req, res) {
	try {
		const payload = { email: req.body.email }
		const salt = bcrypt.genSaltSync(parseInt(10))
		const encrypted = bcrypt.hashSync(req.body.contraseña, salt)
		req.body.contraseña = encrypted

		const alumno = await Alumno.create(req.body, {
			attributes: { exclude: ['contraseña'] }
		})


		const token = jwt.sign(payload, process.env.SECRET, { expiresIn: '24h' })

		if (alumno.role === "personnel") { // ojo
			const vetInfo = await Vet.create(req.body)
			await vetInfo.setAlumno(alumno)

			return res.status(200).json({
				message: 'Vet created',
				alumno: alumno,
				vetInfo: vetInfo,
				token: token
			})

		} else if (alumno.role === "alumno") {
			const contactInfo = await ContactInfo.create(req.body)
			await contactInfo.setAlumno(alumno)

			return res.status(200).json({
				message: 'Alumno created',
				alumno: alumno,
				info: contactInfo,
				token: token
			})
		}
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
				id: req.params.alumnoId,
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
