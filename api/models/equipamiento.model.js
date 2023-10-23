const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Equipamiento = sequelize.define(
    'equipamiento',
    {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        FechaEntrega: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        FechaDevolucion: {
            type: DataTypes.DATE,
            unique: true,
            validate: {
                isEmail: true,
            }
        }
    },
    { timestamps: false }
)

module.exports = Equipamiento