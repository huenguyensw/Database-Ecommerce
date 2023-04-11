const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        requried: true
    },
    description: {
        type: String,
        requried: true
    },
    price: {
        type: Number,
        requried: true
    },
    quantity: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('products',ProductSchema)