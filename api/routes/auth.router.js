const router = require('express').Router()
const { signup, login } = require('../controllers/auth.controller')
const { authenticateToken } = require('../middleware/auth.middleware')



// Usuarios crea
router.post('/signup', signup);

// Inicio de sesión
router.post('/login', login);

// Cierra sesión
router.post('/logout', authenticateToken, logout);

// Reset de contra
router.post('/reset-password', resetPassword);

// Cambio de contra
router.post('/change-password', authenticateToken, changePassword);

module.exports = router