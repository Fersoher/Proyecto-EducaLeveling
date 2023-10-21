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
	deleteAlumno } = require('../controllers/alumnos')

router.get('/alumno', getAllAlumnos)
router.get('/alumno/:id', getOneAlumno)
router.get('/alumno/profile', getOwnProfile)
router.get('/alumno/tests', getOwnTests)
router.get('/alumno/asignatura', getOwnAsignaturas)
router.get('/alumnos/curso', getOwnCursos)
router.post('/alumno', createAlumno)
router.put('/alumno/profile', updateOwnAlumno)
router.put('/alumno/:alumnoId', updateAlumno)
router.delete('/alumno/:alumnoId', deleteAlumno)

module.exports = router