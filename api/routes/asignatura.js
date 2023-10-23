const router = require('express').Router()
const { getAllAsignaturas, getOneAsignatura, createAsignatura, updateAsignatura, deleteAsignatura } = require('../controllers/asignatura.controller')

router.get('/asignatura', getAllAsignaturas)
router.get('/asignatura/:asignaturaId', getOneAsignatura)
router.post('/asignatura', createAsignatura)
router.put('/asignatura/:asignaturaId', updateAsignatura)
router.delete('/asignatura/:asignaturaId', deleteAsignatura)

module.exports = router