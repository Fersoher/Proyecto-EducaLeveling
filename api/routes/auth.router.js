const router = require('express').Router()
const { signUpAlumno, loginAlumno, signUpEmpleado, loginEmpleado } = require('../controllers/auth.comtrollers')
//const { authenticateToken } = require('../middleware/auth.middleware')



// Usuarios crea
router.post('/signup', signUpAlumno);

// Inicio de sesión
router.post('/login', loginAlumno);

// Cierra sesión
//router.post('/logout', authenticateToken, logout);

// Reset de contra
//router.post('/reset-password', resetPassword);

// Cambio de contra
//router.post('/change-password', authenticateToken, changePassword);

// Usuarios crea
router.post('/signup', signUpEmpleado, loginEmpleado);

// Inicio de sesión
//router.post('/login', login);

// Cierra sesión
//router.post('/logout', authenticateToken, logout);

// Reset de contra
//router.post('/reset-password', resetPassword);

// Cambio de contra
//router.post('/change-password', authenticateToken, changePassword);

module.exports = router