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
    console.log('req', req.file);
    const {filename} = req.file;
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
        res.send(await Product.updateOne({ _id: req.params.ProductId }, req.body))
    }
    catch (error) { console.log(error) }
}

module.exports.deleteProduct = async (req, res) => {
    try {
        res.send(await Product.deleteOne({ _id: req.params.ProductId }))
    }
    catch (error) { console.log(error) }
}