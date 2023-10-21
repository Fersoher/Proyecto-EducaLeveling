const Alumno = require('../models/equipamiento.models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

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
		const payload = { email: req.body.email }
		const salt = bcrypt.genSaltSync(parseInt(10))
		const encrypted = bcrypt.hashSync(req.body.contraseña, salt)
		req.body.contraseña = encrypted

		const alumno = await Equipamiento.create(req.body, {
			attributes: { exclude: ['contraseña'] }
		})

		const token = jwt.sign(payload, process.env.SECRET, { expiresIn: '24h' })
		
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