const { Sequelize } = require('sequelize')
require('dotenv').config()

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: process.env.DIALECT,
    port: process.env.DB_PORT,
    logging: false
}); 

async function checkDB(){ // Esto checkea
    try {
        await sequelize.authenticate()
        console.log("Connection to DB ok")
    } catch (error) {
        console.log(error)
    }
}

async function syncModels(){
    try {
        await sequelize.sync()
        console.log("Models synchronized")
    } catch (error) {
        console.log(error)
    }
}

module.exports = { sequelize, checkDB, syncModels }
