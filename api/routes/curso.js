const router = require('express').Router()
const { getAllCursos, getOneCurso, createCurso, updateCurso, deleteCurso } = require('../controllers/curso.controller')

router.get('/', getAllCursos)
router.get('/:cursoId', getOneCurso)
router.post('/', createCurso)
router.put('/:cursoId', updateCurso)
router.delete('/:cursoId', deleteCurso)

module.exports = router