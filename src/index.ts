import express from 'express';
import mongoose from 'mongoose';
import path from 'node:path';

import { router } from './router';

mongoose.connect('mongodb://localhost:27017').then(() => {
	console.log('Conectado ao mongodb');
	const app = express();
	const port = 3001;
	app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
	app.use(express.json());
	app.use(router);
	app.listen(3001, () => {
		console.log(`Server is running on http://localhost:${port}`);
	});
}).catch(()=>{
	console.log('Error');
});
