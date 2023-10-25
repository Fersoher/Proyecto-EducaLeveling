const Curso = require('../models/curso.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

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
		
		const curso = await Curso.create(req.body)
		return res.status(200).json({ message: 'Curso creado', curso :curso})
		
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