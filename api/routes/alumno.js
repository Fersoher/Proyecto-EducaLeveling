const router = require('express').Router()
const { checkAlumno, checkAdmin, checkIfEmpleado } = require('../middlewares/auth.js')

const { getAllAlumnos,
	getOwnProfile,
	getOwnTests,
    getOwnAsignaturas,
    getOwnCursos,
	getOneAlumno,
	createAlumno,
	updateAlumno,
	updateOwnAlumno,
	deleteAlumno } = require('../controllers/alumnos.controller.js')


router.get('/', checkIfEmpleado, checkAdmin,getAllAlumnos)
router.get('/profile', checkAlumno, getOwnProfile)
router.get('/tests', checkAlumno, getOwnTests)
router.get('/asignatura', checkAlumno, getOwnAsignaturas)
router.get('/curso', checkAlumno, getOwnCursos)
router.get('/:id', checkIfEmpleado, checkAdmin, getOneAlumno)
router.post('/', checkIfEmpleado, checkAdmin, createAlumno)
router.put('/profile', checkAlumno, updateOwnAlumno)
router.put('/:alumnoId', checkIfEmpleado, checkAdmin, updateAlumno)
router.delete('/:alumnoId', checkIfEmpleado, checkAdmin, deleteAlumno)

module.exports = router