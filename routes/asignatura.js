const router = require('express').Router()
const { getAllAsignaturas, getOneAsignatura, createAsignatura, updateAsignatura, deleteAsignatura } = require('../controllers/asignatura')

router.get('/asignatura', getAllAsignaturas)
router.get('/asignatura/:asignaturaId', getOneAsignatura)
router.post('/asignatura', createAsignatura)
router.put('/asignatura/:asignaturaId', updateAsignatura)
router.delete('/asignatura/:easignaturaId', deleteAsignatura)

module.exports = router