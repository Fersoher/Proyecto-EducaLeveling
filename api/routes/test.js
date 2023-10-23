const router = require('express').Router()
const { getAllTests, getOneTest, createTest, GetAvaibleTests, updateAvaibleTests, updateTest, deleteTest } = require('../controllers/test.controller')

router.get('/test', getAllTests)
router.get('/test/:testId', getOneTest)
router.get('/test/avaible', GetAvaibleTests)
router.post('/test', createTest)
router.put('/test/avaible', updateAvaibleTests)
router.put('/test/:testId', updateTest)
router.delete('/test/:testId', deleteTest)

module.exports = router