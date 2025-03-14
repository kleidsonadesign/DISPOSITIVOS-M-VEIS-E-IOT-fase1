import express from 'express'
import productController from '../../controllers/productController.js'
const router = express.Router();

router.route('/')
.get(productController.findAll)
.post(productController.insertOne)


router.route('/:code')
.get(productController.findOne)
.delete(productController.deleteOne)
.put(productController.updateOne)

export default router;