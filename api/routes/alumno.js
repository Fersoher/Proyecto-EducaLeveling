const router = require('express').Router()

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

router.get('/', getAllAlumnos)
router.get('/:id', getOneAlumno)
router.get('/profile', getOwnProfile)
router.get('/tests', getOwnTests)
router.get('/asignatura', getOwnAsignaturas)
router.get('/curso', getOwnCursos)
router.post('/', createAlumno)
router.put('/profile', updateOwnAlumno)
router.put('/:alumnoId', updateAlumno)
router.delete('/:alumnoId', deleteAlumno)

module.exports = router