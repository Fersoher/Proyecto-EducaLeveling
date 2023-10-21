const Alumno = require('../models/alumnos.model.js')
const XXXXXXXXXX = require('../api/models/ /*XXXXXXXXXX*/ .model') // añadir tabla a relacionar

function setRelations(){
    try {
        Alumno.hasOne(XXXXXXXXXX, {foreignKey: {unique: true}})  // Esta (XXXXXXXXXX) sería la tabla a relacionar one on one con Alumno
        XXXXXXXXXX.belongsTo(Alumno)

        console.log("Relations added")
    } catch (error) {
        console.log(error)
    }
}

module.exports = { setRelations }