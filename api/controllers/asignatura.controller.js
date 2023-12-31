const Asignatura = require('../models/asignatura.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
async function getAllAsignaturas(req, res) {
	try {
		const asignatura = await Asignatura.findAll({
			where: req.query,
			attributes: {
				exclude: ['contraseña']
			}
		})
		if (asignatura) {
			return res.status(200).json(asignatura)
		} else {
			return res.status(404).send('No asignatura found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function getOneAsignatura(req, res) {
	try {
		const asignatura = await Asignatura.findByPk(req.params.asignaturaId, {
			attributes: {
				exclude: ['contraseña']
			}
		})
		if (asignatura) {
			return res.status(200).json(asignatura)
		} else {
			return res.status(404).send('Asignatura not found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function createAsignatura(req, res) {
	try {
		const asignatura = await Asignatura.create(req.body)
		return res.status(200).json({ message: 'Asignatura creada', asignatura: asignatura })
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function updateAsignatura(req, res) {
	try {
		const [asignaturaExist, asignatura] = await Asignatura.update(req.body, {
			returning: true,
			where: {
				id: req.params.asignaturaId,
			},
		})
		if (asignaturaExist !== 0) {
			return res.status(200).json({ message: 'Asignatura updated', asignatura: asignatura })
		} else {
			return res.status(404).send('Asignatura not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

async function deleteAsignatura(req, res) {
	try {
		const asignatura = await Asignatura.destroy({
			where: {
				id: req.params.asignaturaId,
			},
		})
		if (asignatura) {
			return res.status(200).send('Asignatura deleted')
		} else {
			return res.status(404).send('Asignatura not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

module.exports = {
	getAllAsignaturas,
	getOneAsignatura,
	createAsignatura,
    updateAsignatura,
    deleteAsignatura
}