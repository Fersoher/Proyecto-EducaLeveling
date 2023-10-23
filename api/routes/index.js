const router = require('express').Router()


router.use('/empleado', require('./empleado'))
router.use('/alumno', require('./alumno'))
router.use('/asignatura', require('./asignatura'))
router.use('/curso', require('./curso'))
router.use('/test', require('./test'))
router.use('/equipamiento', require('./equipamiento'))

module.exports = router