const router = require('express').Router()
const { getAllTests, getOneTest, createTest, updateOwnTest, updateTest, deleteTest } = require('../controllers/test.controller')

router.get('/test', getAllTests)
router.get('/test/:testId', getOneTest)
router.post('/test', createTest)
router.put('/test/avaible', updateOwnTest)
router.put('/test/:testId', updateTest)
router.delete('/test/:testId', deleteTest)

module.exports = router