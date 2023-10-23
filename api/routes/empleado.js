const router = require('express').Router()
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

router.get('/', getAllEmpleados)
router.get('/:empleadoId', getOneEmpleado)
router.get('/profile', getOwnProfile)
router.get('/tests', getOwnTests)
router.get('/asignatura', getOwnAsignaturas)
router.get('/curso', getOwnCursos)
router.post('/', createEmpleado)
router.put('/profile', updateOwnEmpleado)
router.put('/:empleadoId', updateEmpleado)
router.delete('/:empleadoId', deleteEmpleado)

module.exports = router