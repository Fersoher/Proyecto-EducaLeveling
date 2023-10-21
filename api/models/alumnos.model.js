const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Alumno = sequelize.define(
	'alumno',
	{
		nombre: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		apellidos: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            validate:{
                isEmail: true,
            }
        },
        contraseña: {
            type: DataTypes.STRING,
            allowNull: false,
        },   
    },
    {timestamps: false}
)

module.exports = Alumno