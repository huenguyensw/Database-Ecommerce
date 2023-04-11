const express = require('express')
const router = express.Router();

const controller = require('../Controllers/ProductController')

router.get('/',controller.fetchAllProducts)
router.get('/:ProductId',controller.fetchSpecificProduct)
router.post('/',controller.addProduct)
router.put(('/:ProductId'),controller.editProduct)
router.delete(('/:ProductId'),controller.deleteProduct)

module.exports = router;