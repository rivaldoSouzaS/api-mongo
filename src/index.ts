import express from 'express';

const app = express();

const port = 3001;
//teste git
app.listen(3001, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
