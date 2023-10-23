const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Asignatura = sequelize.define(
    'asignatura',
    {
        asignatura: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    { timestamps: false }
)

module.exports = Asignatura