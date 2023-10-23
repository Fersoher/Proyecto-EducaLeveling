const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Curso = sequelize.define(
    'curso',
    {
        nombre_curso: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    { timestamps: false }
)

module.exports = Curso