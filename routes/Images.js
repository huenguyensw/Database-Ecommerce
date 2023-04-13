const express = require('express')
//const multer = require('multer');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'./uploads/')
    },
    filename: function(req,file,cb){
        cb(null,new Date().toISOString().replace(/:/g, '-') + file.originalname);
    }
})
// const upload = multer({dest: 'uploads/'});
const upload = multer({storage: storage, limits:{
    fileSize: 1024 * 1024 * 5
}});

const controller = require('../Controllers/ImageController')

router.get('/',controller.fetchAllImages)
router.get('/imageId',controller.fetchOneImage)
router.post('/', upload.single('productImage'),controller.addImage)

module.exports = router;