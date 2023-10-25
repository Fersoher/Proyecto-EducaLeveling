const router = require('express').Router()
const { getAllEquipamiento, getOneEquipamiento, createEquipamiento, updateEquipamiento, deleteEquipamiento } = require('../controllers/equipamiento.controller.js')
const { checkUser, checkAdmin } = require('../middlewares/auth.js')

router.get('/', checkUser, checkAdmin, getAllEquipamiento)
router.get('/:equipamientoId', checkUser, checkAdmin, getOneEquipamiento)
router.post('/', checkUser, checkAdmin, createEquipamiento)
router.put('/:equipamientoId', checkUser, checkAdmin, updateEquipamiento)
router.delete('/:equipamientoId', checkUser, checkAdmin, deleteEquipamiento)

module.exports = router