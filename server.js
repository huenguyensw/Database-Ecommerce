require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose');
const connectDB = require('./Config/DbConnection')

connectDB();


//This format data to json
app.use(express.json())

app.use(cors())

const ProductRouter = require('./routes/Products');
app.use('/products',ProductRouter)


app.use('/assest',express.static('assest'))


mongoose.connection.once('open',()=>{
    console.log('Connect to MongoDB')
    app.listen(process.env.PORT, ()=>{
        console.log(`Listening on port: ` + process.env.PORT)
    })
})