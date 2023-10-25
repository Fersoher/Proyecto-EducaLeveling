const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Test = sequelize.define(
    'test',
    {
        examen: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nota: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }
)

module.exports = Test