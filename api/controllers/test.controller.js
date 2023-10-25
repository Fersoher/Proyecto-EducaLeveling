const Test = require('../models/test.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


async function getAllTests(req, res) {
	try {
		const test = await Test.findAll({
			where: req.query,
			attributes: {
				exclude: ['contraseña']
			}
		})
		if (test) {
			return res.status(200).json(test)
		} else {
			return res.status(404).send('No test found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function getOneTest(req, res) {
	try {
		const test = await Test.findByPk(req.params.testId, {
			attributes: {
				exclude: ['contraseña']
			}
		})
		if (test) {
			return res.status(200).json(test)
		} else {
			return res.status(404).send('Test not found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function createTest(req, res) {
	try {
		const test = await Test.create(req.body)
		return res.status(200).json({ message: 'Test creado', test: test })
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function updateOwnTest(req, res) {
	try {
		const [testExist, test] = await Test.update(req.body, {
			returning: true,
			where: {
				id: req.locals.testId,
			},
		})
		if (testExist !== 0) {
			return res.status(200).json({ message: 'Test updated', test: test })
		} else {
			return res.status(404).send('Test not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

async function updateTest(req, res) {
	try {
		const [testExist, test] = await Test.update(req.body, {
			returning: true,
			where: {
				id: req.params.testId,
			},
		})
		if (testExist !== 0) {
			return res.status(200).json({ message: 'Test updated', test: test })
		} else {
			return res.status(404).send('Test not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

async function deleteTest(req, res) {
	try {
		const test = await Test.destroy({
			where: {
				id: req.params.id,
			},
		})
		if (test) {
			return res.status(200).send('Test deleted')
		} else {
			return res.status(404).send('Test not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

module.exports = {
	getAllTests,
	getOneTest,
	createTest,
    updateTest,
	updateOwnTest,
    deleteTest
}