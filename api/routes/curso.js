const router = require('express').Router()
const { getAllCursos, getOneCurso, createCurso, updateCurso, deleteCurso } = require('../controllers/curso.controller')

router.get('/curso', getAllCursos)
router.get('/curso/:cursoId', getOneCurso)
router.post('/curso', createCurso)
router.put('/curso/:cursoId', updateCurso)
router.delete('/curso/:cursoId', deleteCurso)

module.exports = router