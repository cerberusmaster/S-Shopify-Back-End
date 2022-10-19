import express from "express"
const dotenv = require('dotenv')
const connectDatabase = require('./src/db')

dotenv.config()

connectDatabase()

const app = express()

// routes
app.use(require('./src/routes'))

// start the express server
app.listen(process.env.SERVER_PORT, () => {
    console.log(`server started at ${process.env.APP_URL}:${process.env.SERVER_PORT}`)
})
