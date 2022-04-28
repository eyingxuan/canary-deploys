const express = require('express');
const path = require('path');

const app = express();

const getRandomInt = (max) => {
	return Math.floor(Math.random() * max);
}

app.get('/', (req, res) => {
	if (getRandomInt(10) < 2) {	
		res.status(500).send('This is supposed to fail 20% of the time.');
	} else {
		res.sendFile(path.join(__dirname, '/html/version_c.html'));
	}
});

console.log('Authors: Edward Kim (kime022), Ying Xuan Eng (yxeng)');

const port = 8080
app.listen(port, () => {
	console.log(
		`Server C running on port ${port}!`
	);
});