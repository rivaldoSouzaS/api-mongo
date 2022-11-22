import { model, Schema } from 'mongoose';

export const Category = model('Category', new Schema({
	name: {
		tepy: String,
		required: true
	},
	icon: {
		tepy: String,
		required: true
	}
}));
