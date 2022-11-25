import { Product } from '../../models/Product';
import { Request, Response } from 'express';

export async function deleteProduct(req: Request, res:Response){
	try {
		const productId = req.params;
		const result = await Product.deleteOne(productId);
		res.status(201).send(result);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
}
