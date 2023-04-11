const express = require('express')
const app = express()
const mongoose = require('mongoose');
const connectDB = require('./Config/DbConnection')
const port = 3000

connectDB();

//This format data to json
app.use(express.json())



mongoose.connection.once('open',()=>{
    console.log('Connect to MongoDB')
    app.listen(port, ()=>{
        console.log(`Listening on port: ` + port)
    })
})