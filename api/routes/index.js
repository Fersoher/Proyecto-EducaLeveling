const router = require('express').Router()


router.use('/empleado', require('./empleado.controller.js'))
router.use('/alumno', require('./alumno.controller.js'))
router.use('/asignatura', require('./asignatura.controller.js'))
router.use('/curso', require('./curso.controller.js'))
router.use('/test', require('./test.controller.js'))
router.use('/equipamiento', require('./equipamiento.controller.js'))

module.exports = router