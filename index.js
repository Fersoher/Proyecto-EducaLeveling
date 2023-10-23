const { checkDB, syncModels } = require('./database/index.js')
const { setRelations } = require('./database/models.js')
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
require('dotenv').config()

async function connectDB(){
    await checkDB()
    setRelations()
    await syncModels()
}

function launchServer(){
    
    const app = express()
        .use(cors())
        .use(morgan('dev'))
        .use(express.json())
        .use('/api', require('./api/routes/index.js')) // http://localhost:3000/api

        .listen(process.env.SRV_PORT, ()=> {console.log("Server listening: port 3000")})
}


async function startAPI(){
    await connectDB()
    launchServer()
}

startAPI()