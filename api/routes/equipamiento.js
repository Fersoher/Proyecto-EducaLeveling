const router = require('express').Router()
const { getAllEquipamiento, getOneEquipamiento, createEquipamiento, updateEquipamiento, deleteEquipamiento } = require('../controllers/equipamiento.controller.js')

router.get('/', getAllEquipamiento)
router.get('/:equipamientoId', getOneEquipamiento)
router.post('/', createEquipamiento)
router.put('/:equipamientoId', updateEquipamiento)
router.delete('/:equipamientoId', deleteEquipamiento)

module.exports = router