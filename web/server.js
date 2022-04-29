import express from 'express';
import router from './routes.js';

const app = express();

app.use('/', router);

console.log(
	'Authors: Edward Kim (kime022), Ying Xuan Eng (yxeng)'
);

const port = 9898
app.listen(port, () => {
	console.log(
		`Server C running on port ${port}!`
	);
});