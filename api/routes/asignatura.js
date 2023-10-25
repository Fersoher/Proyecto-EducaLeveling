const router = require('express').Router()
const { getAllAsignaturas, getOneAsignatura, createAsignatura, updateAsignatura, deleteAsignatura } = require('../controllers/asignatura.controller')
const { checkUser, checkAdmin } = require('../middlewares/auth')

router.get('/', checkUser, checkAdmin, getAllAsignaturas)
router.get('/:asignaturaId', checkUser, checkAdmin, getOneAsignatura)
router.post('/', checkUser, checkAdmin, createAsignatura)
router.put('/:asignaturaId', checkUser, checkAdmin, updateAsignatura)
router.delete('/:asignaturaId', checkUser, checkAdmin, deleteAsignatura)

module.exports = router