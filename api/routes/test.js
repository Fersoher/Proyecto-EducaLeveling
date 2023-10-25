const router = require('express').Router()
const { getAllTests, getOneTest, createTest, updateOwnTest, updateTest, deleteTest } = require('../controllers/test.controller')
const { checkUser, checkAdmin, checkEmpleado } = require('../middlewares/auth')

router.get('/', checkUser, checkAdmin, getAllTests)
router.get('/:id', checkUser, checkAdmin, getOneTest)
router.post('/', checkUser, checkEmpleado, createTest)
router.put('/avaible', checkUser, checkEmpleado, updateOwnTest)
router.put('/:id', checkUser, checkAdmin, updateTest)
router.delete('/:id', checkUser, checkEmpleado, deleteTest)

module.exports = router