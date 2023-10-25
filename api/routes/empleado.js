const router = require('express').Router()
const { checkEmpleado, checkAdmin, checkUser } = require('../middlewares/auth')
const { getAllEmpleados,
	getOwnProfile,
	getOwnTests,
    getOwnAsignaturas,
    getOwnCursos,
	getOneEmpleado,
	createEmpleado,
	updateEmpleado,
	updateOwnEmpleado,
	deleteEmpleado } = require('../controllers/empleados.controller.js')

router.get('/', checkUser, checkAdmin, getAllEmpleados)
router.get('/profile', checkUser, checkEmpleado, getOwnProfile)
router.get('/tests', checkUser, checkEmpleado, getOwnTests)
router.get('/asignatura', checkUser, checkEmpleado, getOwnAsignaturas)
router.get('/curso', checkUser, checkEmpleado, getOwnCursos)
router.get('/:id', checkUser, checkEmpleado, getOneEmpleado)
router.post('/', checkUser, checkEmpleado, createEmpleado)
router.put('/profile', checkUser, checkEmpleado, updateOwnEmpleado)
router.put('/:id', checkUser, checkAdmin, updateEmpleado)
router.delete('/:id', checkUser, checkAdmin, deleteEmpleado)

module.exports = router