const router = require('express').Router()
const { getAllCursos, getOneCurso, createCurso, updateCurso, deleteCurso } = require('../controllers/curso.controller')
const { checkUser, checkAdmin } = require('../middlewares/auth')

router.get('/', checkUser, checkAdmin, getAllCursos)
router.get('/:cursoId', checkUser, checkAdmin, getOneCurso)
router.post('/', checkUser, checkAdmin, createCurso)
router.put('/:cursoId', checkUser, checkAdmin, updateCurso)
router.delete('/:cursoId', checkUser, checkAdmin, deleteCurso)

module.exports = router