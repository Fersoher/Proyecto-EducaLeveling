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

router.get('/', getAllEmpleados)
router.get('/profile', checkEmpleado, getOwnProfile)
router.get('/tests', getOwnTests)
router.get('/asignatura', getOwnAsignaturas)
router.get('/curso', getOwnCursos)
router.get('/:empleadoId', getOneEmpleado)
router.post('/', createEmpleado)
router.put('/profile', updateOwnEmpleado)
router.put('/:empleadoId', updateEmpleado)
router.delete('/:empleadoId', deleteEmpleado)

module.exports = router