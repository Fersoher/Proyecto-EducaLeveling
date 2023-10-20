const router = require('express').Router()
const { getAllEmpleados, getOneEmpleado, createEmpleado, updateEmpleado, deleteEmpleado, getOwnTests, getOwnAsignatura, getOwnCursos } = require('../controllers/empleado')

router.get('/empleado', getAllEmpleados)
router.get('/empleado/:empleadoId', getOneEmpleado)
router.get('/empleado/profile', getOwnProfile)
router.get('/empleado/tests', getOwnTests)
router.get('/empleado/asignatura', getOwnAsignatura)
router.get('/empleado/curso', getOwnCursos)
router.get('/empleado/test', getAvaibleTest)
router.post('/empleado', createEmpleado)
router.put('/empleado/profile', updateEmpleado)
router.put('/empleado/:empleadoId', updateEmpleado)
router.delete('/empleado/:empleadoId', deleteEmpleado)

module.exports = router