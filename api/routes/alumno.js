const router = require('express').Router()
const { checkAlumno } = require('../middlewares/auth.js')

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


router.get('/', checkAlumno,getAllAlumnos)
router.get('/profile', checkAlumno, getOwnProfile)
router.get('/tests', checkAlumno, getOwnTests)
router.get('/asignatura', checkAlumno, getOwnAsignaturas)
router.get('/curso', checkAlumno, getOwnCursos)
router.get('/:id', checkAlumno, getOneAlumno)
router.post('/', createAlumno)
router.put('/profile', checkAlumno, updateOwnAlumno)
router.put('/:alumnoId', checkAlumno, updateAlumno)
router.delete('/:alumnoId', deleteAlumno)

module.exports = router