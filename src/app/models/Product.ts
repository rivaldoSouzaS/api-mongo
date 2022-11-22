import { model, Schema } from 'mongoose';

export const Product = model('Product', new Schema({
	name: {
		tepy: String,
		required: true
	},
	description: {
		tepy: String,
		required: true
	},
	imagePath: {
		tepy: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	ingredients: {
		required: true,
		tepy: [{
			name: {
				tepy: String,
				required: true
			},
			icon: {
				tepy: String,
				required: true
			}
		}]
	},
	category: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: 'Category'
	}
}));
