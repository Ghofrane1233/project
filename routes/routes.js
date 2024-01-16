var express = require('express');
const router = express.Router();
var productController = require('../src/product/ProductController');
router.route('/product/getAll').get(productController.getDataConntrollerfn);
router.route('/product/create').post(productController.createProductControllerFn);
router.route('/product/update/:id').patch(productController.updateProductController);
router.route('/product/delete/:id').delete(productController.deleteProductController);
module.exports = router;