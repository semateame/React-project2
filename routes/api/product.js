const express = require('express')
const productController = require('../../controller/product')
 import auth from '../../middleware/auth';

const router = express.Router()

router.get('/product',productController.getProducts)
router.post('/products', productController.postProducts)
router.delete('/products/:id',productController.deleteProducts)
router.put('/products/:id', productController.updateProducts)





module.exports = router