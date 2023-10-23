const router = require('express').Router()
const { checkAuth } = require("../middlewares/auth");

router.use('/auth', require('./auth.router'))

router.use('/empleado', require('./empleado'))
router.use('/alumno', require('./alumno'))
router.use('/asignatura', require('./asignatura'))
router.use('/curso', require('./curso'))
router.use('/test', require('./test'))
router.use('/equipamiento', require('./equipamiento'))

module.exports = router