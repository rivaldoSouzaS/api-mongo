import { Order } from '../../models/Order';
import { Request, Response } from 'express';

export async function listOrders(req: Request, res:Response){
	try {
		const orders = await Order.find();
		res.json(orders);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
}
