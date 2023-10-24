const router = require('express').Router()
const { checkEmpleado } = require('../middlewares/auth')
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

router.get('/', checkEmpleado, getAllEmpleados)
router.get('/profile', checkEmpleado, getOwnProfile)
router.get('/tests', checkEmpleado, getOwnTests)
router.get('/asignatura', checkEmpleado, getOwnAsignaturas)
router.get('/curso', checkEmpleado, getOwnCursos)
router.get('/:empleadoId', checkEmpleado, getOneEmpleado)
router.post('/', createEmpleado)
router.put('/profile', checkEmpleado, updateOwnEmpleado)
router.put('/:empleadoId', checkEmpleado, updateEmpleado)
router.delete('/:empleadoId', deleteEmpleado)

module.exports = router