import { Router } from 'express';
import multer from 'multer';
import path from 'node:path';

import { listCategories } from './app/useCases/categories/listCategories';
import { createCategory } from './app/useCases/categories/createCategory';
import { listProducts } from './app/useCases/products/listProducts';
import { createProduct } from './app/useCases/products/createProduct';
import { deleteProduct } from './app/useCases/products/deleteProduct';
import { listProductsByCategory } from './app/useCases/products/listProductsByCategory';
import { createOrder } from './app/useCases/orders/createOrder';
import { listOrders } from './app/useCases/orders/listOrders';
export const router = Router();

const upload = multer({
	storage: multer.diskStorage({
		destination(req, res, callback){
			callback(null, path.resolve(__dirname, '..', 'uploads'));
		},
		filename(req, file, callback){
			callback(null, `${Date.now()}-${file.originalname}`);
		}
	})
});

router.get('/categories', listCategories);

router.post('/categories', createCategory);

router.get('/products', listProducts);

router.post('/products', upload.single('image'), createProduct);

router.delete('/products/:productId', deleteProduct);

router.get('/products/categories/:categoryId', listProductsByCategory);

router.get('/orders', listOrders);

router.post('/orders', createOrder);

router.patch('/orders/:orderId', (req, res) => {
	res.send('ok');
});

router.delete('/orders/:orderId', (req, res) => {
	res.send('ok');
});
