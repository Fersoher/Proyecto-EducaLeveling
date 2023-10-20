const { getAllAlumnos, getOneAlumno, createAlumno, updateAlumno, deleteAlumno, getOwnTests, getOwnAsignatura, getOwnCursos } = require('../controllers/alumno')

router.get('/alumno', getAllAlumnos)
router.get('/alumno/:id', getOneAlumno)
router.get('/alumno/profile', getOwnProfile)
router.get('/alumno/tests', getOwnTests)
router.get('/alumno/asignatura', getOwnAsignatura)
router.get('/alumnos/curso', getOwnCursos)
router.get('/alumnos/test', getAvaibleTest)
router.post('/alumno', createAlumno)
router.put('/alumno/profile', updateAlumno)
router.put('/alumno/:alumnoId', updateAlumno)
router.delete('/alumno/:alumnoId', deleteAlumno)

module.exports = router