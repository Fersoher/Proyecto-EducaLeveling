const router = require('express').Router()
const { checkEmpleado, checkAdmin, checkUser } = require('../middlewares/auth.js')

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


router.get('/', checkUser, checkEmpleado, getAllAlumnos)
router.get('/profile', checkUser, getOwnProfile)
router.get('/tests', checkUser, getOwnTests)
router.get('/asignatura', checkUser, getOwnAsignaturas)
router.get('/curso', checkUser, getOwnCursos)
router.get('/:id', checkUser, checkEmpleado, getOneAlumno)
router.post('/', checkUser, checkAdmin, createAlumno)
router.put('/profile', checkUser, updateOwnAlumno)
router.put('/:alumnoId', checkUser, checkEmpleado, updateAlumno)
router.delete('/:alumnoId', checkUser, checkAdmin, deleteAlumno)

module.exports = router