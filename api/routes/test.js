const router = require('express').Router()
const { getAllTests, getOneTest, createTest, updateOwnTest, updateTest, deleteTest } = require('../controllers/test.controller')
const { checkUser, checkAdmin } = require('../middlewares/auth')

router.get('/', checkUser, checkAdmin, getAllTests)
router.get('/:id', checkUser, checkAdmin, getOneTest)
router.post('/', checkUser, checkAdmin, createTest)
router.put('/avaible', checkUser, checkAdmin, updateOwnTest)
router.put('/:id', checkUser, checkAdmin, updateTest)
router.delete('/:id', checkUser, checkAdmin, deleteTest)

module.exports = router