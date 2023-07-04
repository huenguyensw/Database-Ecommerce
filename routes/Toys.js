const express = require('express')
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'./uploads')
    },
    filename: function(req,file,cb){
        cb(null,new Date().toISOString().replace(/:/g, '-') + file.originalname);
    }
})

const upload = multer({storage: storage, limits:{
    fileSize: 1024 * 1024 * 5
}});


const controller = require('../Controllers/ToyController')

router.get('/',controller.fetchAllToys);
router.get('/:ToyId',controller.fetchSpecificToy);
router.post('/',upload.single('ToyImage'),controller.addToy);
router.patch('/:ToyId',upload.single('ToyImage'),controller.updateToy);
router.delete('/:ToyId',controller.deleteToy)

module.exports = router;

