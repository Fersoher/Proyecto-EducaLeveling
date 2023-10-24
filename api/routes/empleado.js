const router = require('express').Router()
const { checkEmpleado, checkAdmin } = require('../middlewares/auth')
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

router.get('/', checkEmpleado, checkAdmin, getAllEmpleados)
router.get('/profile', checkEmpleado, getOwnProfile)
router.get('/tests', checkEmpleado, getOwnTests)
router.get('/asignatura', checkEmpleado, getOwnAsignaturas)
router.get('/curso', checkEmpleado, getOwnCursos)
router.get('/:empleadoId', checkEmpleado, getOneEmpleado)
router.post('/', checkAdmin, createEmpleado)
router.put('/profile', checkEmpleado, updateOwnEmpleado)
router.put('/:empleadoId', checkAdmin, updateEmpleado)
router.delete('/:empleadoId', checkAdmin, deleteEmpleado)

module.exports = router