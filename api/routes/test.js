const router = require('express').Router()
const { getAllTests, getOneTest, createTest, updateOwnTest, updateTest, deleteTest } = require('../controllers/test.controller')

router.get('/', getAllTests)
router.get('/:testId', getOneTest)
router.post('/', createTest)
router.put('/avaible', updateOwnTest)
router.put('/:testId', updateTest)
router.delete('/:testId', deleteTest)

module.exports = router