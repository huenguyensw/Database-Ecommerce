Toy = require('../models/Toy')

module.exports.fetchAllToys = async(req,res) =>{
    try{
        res.json(await Toy.find())
    }catch(error){console.log(error)}
}

module.exports.fetchSpecificToy = async(req,res)=>{
    try{
        res.json(await Toy.findById(req.params.ToyId))
    }catch(error){console.log(error)}
}

module.exports.addToy = async(req,res) =>{
    var filename = '2023-04-17T09-17-01.956Zno-image-available-icon-flat-vector-25898826.png';
    if(req.file){
        console.log(req.file);
        filename = req.file.filename;
    }
   
    try {
        const toy = new Toy({
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            quantity: req.body.quantity,
            forObject: req.body.forObject,
            image: filename
        })
        res.send(await toy.save())
    } catch (error) { console.log(error) }
}

module.exports.updateToy = async(req,res) =>{
    try {
        var ToyContent = {
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            quantity: req.body.quantity,
            forObject: req.body.forObject
        };
        if(req.file){
            console.log(req.file);
            ToyContent.image = req.file.filename;
        }
        res.send(await Toy.updateOne({ _id: req.params.ToyId }, ToyContent ))
    }
    catch (error) { console.log(error) }
    
}

module.exports.deleteToy = async(req,res)=>{
    try {
        res.send(await Toy.deleteOne({ _id: req.params.ToyId }))
    }
    catch (error) { console.log(error) }
}
