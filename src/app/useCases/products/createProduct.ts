import { Product } from '../../models/Product';
import { Request, Response } from 'express';

export async function createProduct(req: Request, res:Response){
	try {
		console.log(req.body);

	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
}
