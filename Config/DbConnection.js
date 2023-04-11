const mongoose = require('mongoose')

const connectDB = async() =>{
    try{
        await mongoose.connect('mongodb+srv://root_user:123hahue123@cluster0.tng6fsx.mongodb.net/?retryWrites=true&w=majority')
    }catch(err){
        console.log(err);
    }
}

module.exports = connectDB