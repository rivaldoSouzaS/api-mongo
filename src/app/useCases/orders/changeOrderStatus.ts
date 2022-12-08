import { Order } from '../../models/Order';
import { Request, Response } from 'express';

export async function changeOrderStatus(req: Request, res:Response){
	try {
		const {orderId} = req.params;
		const { status } = req.body;

		if(!['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status)){
			return res.status(400).json({
				error: 'Status should by waiting, in_production or done'
			}).send(orderId);
		}

		await Order.findByIdAndUpdate(orderId, {status});
		res.sendStatus(204);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
}
