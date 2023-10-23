const Alumno = require('../api/models/alumnos.model')
const Empleado = require('../api/models/empleados.model')
const Asignatura = require('../api/models/asignatura.model')
const Curso = require('../api/models/curso.model')
const Equipamiento = require('../api/models/equipamiento.model')
const Test = require('../api/models/test.model')

function setRelations(){
    try {
        Alumno.hasOne(Equipamiento)
        Equipamiento.belongsTo(Alumno)

        Alumno.hasOne(Curso)
        Curso.belongsTo(Alumno)

        Alumno.hasMany(Test)
        Test.belongsTo(Alumno)
        
        Empleado.belongsToMany(Asignatura, { through: 'asignaturaempleado', timestamps: false })
        Asignatura.belongsToMany(Empleado, { through: 'asignaturaempleado', timestamps: false })

        Empleado.hasMany(Test)
        Test.belongsTo(Empleado)

        Asignatura.belongsToMany(Curso, { through: 'asignaturacurso', timestamps: false })
        Curso.belongsToMany(Asignatura, { through: 'asignaturacurso', timestamps: false })

        Asignatura.hasMany(Test)
        Test.belongsTo(Asignatura)
        

        console.log("Relations added")
    } catch (error) {
        console.log(error)
    }
}

module.exports = { setRelations }