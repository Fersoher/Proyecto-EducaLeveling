const Equipamiento = require('../models/equipamiento.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
async function getAllEquipamiento(req, res) {
	try {
		const equipamiento = await Equipamiento.findAll({
			where: req.query,
			attributes: {
				exclude: ['contraseña']
			}
		})
		if (equipamiento) {
			return res.status(200).json(equipamiento)
		} else {
			return res.status(404).send('No equipamiento found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function getOneEquipamiento(req, res) {
	try {
		const equipamiento = await Equipamiento.findByPk(req.params.equipamientoId, {
			attributes: {
				exclude: ['contraseña']
			}
		})
		if (equipamiento) {
			return res.status(200).json(equipamiento)
		} else {
			return res.status(404).send('Equipamiento not found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function createEquipamiento(req, res) {
	try {
		const equipamiento = await Equipamiento.create(req.body)
		return res.status(200).json({ message: 'Equipamiento creado', equipamiento: equipamiento })
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function updateEquipamiento(req, res) {
	try {
		const [equipamientoExist, equipamiento] = await Equipamiento.update(req.body, {
			returning: true,
			where: {
				id: req.params.equipamientoId,
			},
		})
		if (equipamientoExist !== 0) {
			return res.status(200).json({ message: 'Equipamiento updated', equipamiento: equipamiento })
		} else {
			return res.status(404).send('Equipamiento not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

async function deleteEquipamiento(req, res) {
	try {
		const curso = await Equipamiento.destroy({
			where: {
				id: req.params.cursoId,
			},
		})
		if (curso) {
			return res.status(200).send('Equipamiento deleted')
		} else {
			return res.status(404).send('Equipamiento not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

module.exports = {
	getAllEquipamiento,
	getOneEquipamiento,
	createEquipamiento,
    updateEquipamiento,
    deleteEquipamiento
}