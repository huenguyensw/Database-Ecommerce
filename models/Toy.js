const mongoose = require('mongoose')

const ToySchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description: {
        type: String,
        requried: true
    },
    quantity: {
        type: Number,
        requried: true
    },
    price: {
        type: Number,
        requried: true
    },
    forObject: {
        type: String,
        requried: true
    },
    date:{
        type: Date,
        default: new Date()
    },
    image: {
        type: String,
        requried: false
    }
})

module.exports = mongoose.model('toys',ToySchema)