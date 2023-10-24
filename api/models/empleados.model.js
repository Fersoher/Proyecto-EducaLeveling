const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Empleado = sequelize.define(
	'empleado',
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
        telefono: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "profesor"
        },   
        contraseña:{
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {timestamps: false}
)

module.exports = Empleado