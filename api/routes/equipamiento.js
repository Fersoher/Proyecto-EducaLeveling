const router = require('express').Router()
const { getAllEquipamientos, getOneEquipamiento, createEquipamiento, updateEquipamiento, deleteEquipamiento } = require('../controllers/curso')

router.get('/equipamiento', getAllEquipamientos)
router.get('/equipamiento/:equipamientoId', getOneEquipamiento)
router.post('/equipamiento', createEquipamiento)
router.put('/equipamiento/:equipamientoId', updateEquipamiento)
router.delete('/equipamiento/:equipamientoId', deleteEquipamiento)

module.exports = router