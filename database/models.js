const Alumnos = require('../api/models/alumnos.model')
const Empleados = require('../api/models/empleados.model')
const Asignatura = require('../api/models/asignatura.model')
const Curso = require('../api/models/curso.model')
const Equipamiento = require('../api/models/equipamiento.model')
const Test = require('../api/models/test.model')

function setRelations(){
    try {
        Country.hasMany(User)
        User.belongsTo(Country)

        User.hasOne(Adress)
        Adress.belongsTo(User)

        Actor.belongsToMany(Movie, { through: 'actormovies' })
        Movie.belongsToMany(Actor, { through: 'actormovies' })

        console.log("Relations added")
    } catch (error) {
        console.log(error)
    }
}

module.exports = { setRelations }