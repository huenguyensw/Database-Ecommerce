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
// const upload = multer({dest: 'uploads/'});
const upload = multer({storage: storage, limits:{
    fileSize: 1024 * 1024 * 5
}});

const controller = require('../Controllers/ProductController')

router.get('/',controller.fetchAllProducts)
router.get('/:ProductId',controller.fetchSpecificProduct)
router.post('/',upload.single('productImage'),controller.addProduct)
router.put(('/:ProductId'),controller.editProduct)
router.delete(('/:ProductId'),controller.deleteProduct)





module.exports = router;