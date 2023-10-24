const router = require('express').Router()
const { signUpAlumno, loginAlumno, signUpEmpleado, loginEmpleado } = require('../controllers/auth.comtrollers')
//const { authenticateToken } = require('../middleware/auth.middleware')



// Usuarios crea
router.post('/signupalumno', signUpAlumno);

// Inicio de sesión
router.post('/loginalumno', loginAlumno);

// Usuarios crea
router.post('/signupempleado', signUpEmpleado);

// Inicio de sesión
router.post('/loginempleado', loginEmpleado);

// Cambio de contra
//router.post('/change-password', authenticateToken, changePassword);

module.exports = router