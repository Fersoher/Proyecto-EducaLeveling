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

router.get('/empleado', getAllEmpleados)
router.get('/empleado/:empleadoId', getOneEmpleado)
router.get('/empleado/profile', getOwnProfile)
router.get('/empleado/tests', getOwnTests)
router.get('/empleado/asignatura', getOwnAsignaturas)
router.get('/empleado/curso', getOwnCursos)
router.post('/empleado', createEmpleado)
router.put('/empleado/profile', updateOwnEmpleado)
router.put('/empleado/:empleadoId', updateEmpleado)
router.delete('/empleado/:empleadoId', deleteEmpleado)

module.exports = router