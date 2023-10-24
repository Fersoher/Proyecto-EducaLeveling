const router = require('express').Router()
const { signUpAlumno, loginAlumno, signUpEmpleado, loginEmpleado } = require('../controllers/auth.comtrollers')
//const { authenticateToken } = require('../middleware/auth.middleware')



// Usuarios crea
router.post('/signup', signUpAlumno);

// Inicio de sesión
router.post('/login', loginAlumno);

// Usuarios crea
router.post('/signup', signUpEmpleado);

// Inicio de sesión
router.post('/login', loginEmpleado);

// Cambio de contra
//router.post('/change-password', authenticateToken, changePassword);

module.exports = router