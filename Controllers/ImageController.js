Image = require('../models/Image')


module.exports.fetchAllImages = async(req,res) =>{
    try{
        res.json(await Image.find())

    }catch(error){console.log(error)}
}

module.exports.fetchOneImage = async(req,res) =>{
    try{
        res.json(await Image.findById(req.params.imageId))

    }catch(error){console.log(error)}
}

module.exports.addImage = async(req,res)=>{
    try{
        const image = new Image({
            fieldname: req.file.fieldname,
            originalname: req.file.originalname,
            encoding: req.file.encoding,
            destination: req.file.destination,
            mimetype: req.file.mimetype,
            filename: req.file.filename,
            path: req.file.path,
            size: req.file.size
        })
        await image.save();
    }catch(error){console.log(error)}
}