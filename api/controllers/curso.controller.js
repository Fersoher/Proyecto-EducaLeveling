//const Curso = require('../models/curso.models')
const jwt = require('jsonwebtoken')

async function getAllCursos(req, res) {
	try {
		const curso = await Curso.findAll({
			where: req.query,
			attributes: {
				exclude: ['contraseña']
			}
		})
		if (curso) {
			return res.status(200).json(curso)
		} else {
			return res.status(404).send('No curso found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function getOneCurso(req, res) {
	try {
		const curso = await Curso.findByPk(req.params.cursoId, {
			attributes: {
				exclude: ['contraseña']
			}
		})
		if (curso) {
			return res.status(200).json(curso)
		} else {
			return res.status(404).send('Curso not found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function createCurso(req, res) {
	try {
		const payload = { email: req.body.email }
		const salt = bcrypt.genSaltSync(parseInt(10))
		const encrypted = bcrypt.hashSync(req.body.contraseña, salt)
		req.body.contraseña = encrypted

		const alumno = await Curso.create(req.body, {
			attributes: { exclude: ['contraseña'] }
		})

		const token = jwt.sign(payload, process.env.SECRET, { expiresIn: '24h' })
		
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function updateCurso(req, res) {
	try {
		const [cursoExist, curso] = await Curso.update(req.body, {
			returning: true,
			where: {
				id: req.params.cursoId,
			},
		})
		if (cursoExist !== 0) {
			return res.status(200).json({ message: 'Curso updated', curso: curso })
		} else {
			return res.status(404).send('Curso not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

async function deleteCurso(req, res) {
	try {
		const curso = await Curso.destroy({
			where: {
				id: req.params.cursoId,
			},
		})
		if (curso) {
			return res.status(200).send('Curso deleted')
		} else {
			return res.status(404).send('Curso not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

module.exports = {
	getAllCursos,
	getOneCurso,
	createCurso,
    updateCurso,
    deleteCurso
}