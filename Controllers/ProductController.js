Product = require('../models/Product')
Image = require('../models/Image')


module.exports.fetchAllProducts = async (req, res) => {
    try {
        res.json(await Product.find())

    } catch (error) { console.log(error) }
}

module.exports.fetchSpecificProduct = async (req, res) => {
    try {
        res.json(await Product.findById(req.params.ProductId))

    } catch (error) { console.log(error) }
}

module.exports.addProduct = async (req, res) => {
    var filename = '2023-04-17T09-17-01.956Zno-image-available-icon-flat-vector-25898826.png';
    if(req.file){
        console.log(req.file);
        filename = req.file.filename;
    }
   
    
    try {
        const product = new Product({
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            quantity: req.body.quantity,
            image: filename
        })
        res.send(await product.save())
    } catch (error) { console.log(error) }
}

module.exports.editProduct = async (req, res) => {
    
    try {
        var productContent = {
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            quantity: req.body.quantity
        };
        if(req.file){
            console.log(req.file);
            productContent.image = req.file.filename;
        }
        res.send(await Product.updateOne({ _id: req.params.ProductId }, productContent ))
    }
    catch (error) { console.log(error) }
}

module.exports.deleteProduct = async (req, res) => {
    try {
        res.send(await Product.deleteOne({ _id: req.params.ProductId }))
    }
    catch (error) { console.log(error) }
}