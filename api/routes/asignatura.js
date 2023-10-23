const router = require('express').Router()
const { getAllAsignaturas, getOneAsignatura, createAsignatura, updateAsignatura, deleteAsignatura } = require('../controllers/asignatura.controller')

router.get('/', getAllAsignaturas)
router.get('/:asignaturaId', getOneAsignatura)
router.post('/', createAsignatura)
router.put('/:asignaturaId', updateAsignatura)
router.delete('/:asignaturaId', deleteAsignatura)

module.exports = router