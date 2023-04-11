require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose');
const connectDB = require('./Config/DbConnection')
const port = 3000

connectDB();


//This format data to json
app.use(express.json())

const ProductRouter = require('./routes/Products');
app.use('/products',ProductRouter)


app.use('/assest',express.static('assest'))


mongoose.connection.once('open',()=>{
    console.log('Connect to MongoDB')
    app.listen(process.env.PORT, ()=>{
        console.log(`Listening on port: ` + process.env.PORT)
    })
})