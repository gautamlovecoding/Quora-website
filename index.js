import {} from 'dotenv/config'

import express from 'express'
import route from './src/route/route.js'
import connectdb from './src/dbConnection/connectDb.js'



const app = express()
app.use(express.json())


const port = process.env.PORT || '3000'
const DATABASE_URL = process.env.DATABASE_URL

//Database Connection
connectdb(DATABASE_URL)

//Load Routes
app.use('/quora', route)



app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`)
})


