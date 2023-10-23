const router = require('express').Router()
const { getAllEquipamiento, getOneEquipamiento, createEquipamiento, updateEquipamiento, deleteEquipamiento } = require('../controllers/equipamiento.controller.js')

router.get('/equipamiento', getAllEquipamiento)
router.get('/equipamiento/:equipamientoId', getOneEquipamiento)
router.post('/equipamiento', createEquipamiento)
router.put('/equipamiento/:equipamientoId', updateEquipamiento)
router.delete('/equipamiento/:equipamientoId', deleteEquipamiento)

module.exports = router