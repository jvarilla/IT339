/*Node file to write to file*/
'use strict'

const fs = require('fs');
fs.writeFile('target.txt', 'hello world', (err) => {
	if (err) {
		throw err;
	}

	console.log('File Saved!');
})