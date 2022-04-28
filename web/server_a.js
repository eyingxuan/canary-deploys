const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/html/version_a.html'));
});

console.log(
	'Authors: Edward Kim (kime022), Ying Xuan Eng (yxeng)'
);

const port = 8080
app.listen(port, () => {
	console.log(
		`Server A running on port ${port}!`
	);
});